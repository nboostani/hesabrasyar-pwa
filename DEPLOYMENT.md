# Deployment Guide

## Quick Start

### Development
```bash
npm run dev          # Start dev server on localhost:5173
npm run dev -- --host # Expose to network (for mobile testing)
```

### Production Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## Deploy to Various Platforms

### 1. Netlify (Recommended for PWA)

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Via Netlify UI:**
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

**_redirects file for SPA routing:**
```
/*    /index.html   200
```

### 2. Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard.

### 3. GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/hesabrasyar-pwa/', // Your repo name
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

### 4. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

**firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Important Notes

### HTTPS Required
- Camera access requires HTTPS
- Most hosting platforms provide HTTPS by default
- For custom domains, ensure SSL certificate is installed

### Environment Variables
If you add backend API integration:
```bash
# .env
VITE_API_URL=https://your-api.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### PWA Considerations

1. **Service Worker**: Automatically generated and registered
2. **Manifest**: Auto-generated at build time
3. **Icons**: Ensure proper PNG icons are in place (see ICON_INSTRUCTIONS.md)
4. **Cache**: Service worker caches assets automatically

### Testing Deployment

After deployment, test:
1. ✅ App loads over HTTPS
2. ✅ PWA installable (Add to Home Screen)
3. ✅ Camera access works
4. ✅ All routes work (no 404s)
5. ✅ Offline mode works
6. ✅ Service worker registers
7. ✅ Icons display correctly

### Mobile Testing

Use ngrok for local HTTPS testing:
```bash
npx ngrok http 5173
```

Then access the ngrok URL on your mobile device.

## Performance Optimization

Already implemented:
- ✅ Code splitting
- ✅ Asset caching via service worker
- ✅ Lazy loading of routes
- ✅ Optimized images
- ✅ Minified CSS/JS in production

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Lighthouse CI for performance monitoring

## Update Strategy

When deploying updates:
1. Service worker will auto-update on next visit
2. Users will see new version after closing and reopening
3. Consider adding update notification UI for better UX
