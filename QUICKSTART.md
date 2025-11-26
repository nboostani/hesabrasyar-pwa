# 🚀 Quick Start Guide - حسابرسیار

## For Developers

### First Time Setup
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:5173
```

### Available Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run dev -- --host # Expose to network for mobile testing
```

## For Testing on Mobile

### Method 1: Local Network (No HTTPS)
⚠️ Camera won't work without HTTPS, but you can test UI/navigation

```bash
npm run dev -- --host
# Access from phone: http://YOUR_IP:5173
```

### Method 2: Using ngrok (HTTPS)
✅ Recommended for testing camera

```bash
# Install ngrok
npm install -g ngrok

# Start dev server
npm run dev

# In another terminal
ngrok http 5173

# Use the https:// URL on your phone
```

### Method 3: Deploy and Test
Deploy to Netlify/Vercel (automatic HTTPS) and test there.

## 📱 First Time Using the App

1. **Splash Screen** (2.5 seconds)
   - Shows app logo and name

2. **Main Menu** (4 cards)
   - بارگذاری اسناد به پروژه‌ها (Document Upload) ← Start here!
   - لیست شرکت‌ها (Companies)
   - لیست پروژه‌ها (Projects)
   - تایم‌شیت کارکنان (Timesheets)

3. **Document Upload Flow**
   - Tap first card
   - Allow camera permission
   - Point at a document
   - Tap capture button (large white circle)
   - Preview and confirm
   - Select a project
   - Tap "ارسال سند" (Send Document)
   - Success! Auto-redirects to menu

## 🎨 Customization

### Change Colors
Edit `/src/styles/variables.css`:
```css
:root {
  --primary-orange: #EF5530; /* Your color */
  /* ... */
}
```

### Change Logo
1. Replace SVG in components:
   - `SplashScreen.jsx`
   - `MainMenu.jsx`

### Add Real API
Edit `/src/components/DocumentUpload.jsx`:
```javascript
// Replace simulateApiCall with real fetch
const response = await fetch('YOUR_API_URL', {
  method: 'POST',
  body: formData
});
```

## 🔍 Troubleshooting

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Camera not working?
- ✅ Use HTTPS or localhost
- ✅ Check browser permissions
- ✅ Try different browser
- ✅ Check console for errors

### PWA not installing?
- ✅ Use HTTPS
- ✅ Check manifest.webmanifest is served
- ✅ Check service worker registers
- ✅ Hard refresh (Ctrl+Shift+R)

### Text not RTL?
- Check `<html dir="rtl">` in index.html
- Check global.css is imported
- Vazirmatn font should load from CDN

## 📂 Important Files

```
Key Configuration:
├── vite.config.js          # Vite + PWA config
├── index.html              # Entry HTML (RTL setup)
├── package.json            # Dependencies

Main Code:
├── src/App.jsx             # Main app with routing
├── src/components/         # All UI components
├── src/hooks/              # Custom hooks (camera, toast)
├── src/styles/             # Global styles + variables
└── src/utils/              # Constants and helpers

Documentation:
├── README.md               # Full documentation
├── SUMMARY.md              # Project overview
├── DEPLOYMENT.md           # How to deploy
└── ICON_INSTRUCTIONS.md    # Replace icons
```

## 🎯 Common Tasks

### Add a New Page
1. Create component in `/src/components/NewPage.jsx`
2. Add route in `/src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add menu item in `MainMenu.jsx`

### Add Mock Data
Edit `/src/utils/constants.js`:
```javascript
export const NEW_DATA = [
  { id: 1, name: 'Item 1' },
  // ...
];
```

### Change Persian Text
All text is in components - just edit the strings:
```jsx
<h1>Your Persian Text Here</h1>
```

## 🚀 Deployment Quick Commands

### Netlify
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Vercel
```bash
npx vercel --prod
```

### GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```

## 📊 Check if Everything Works

### Checklist
- [ ] `npm install` - No errors
- [ ] `npm run dev` - Server starts
- [ ] Browser opens - App loads
- [ ] Splash screen shows
- [ ] Main menu displays (4 cards)
- [ ] Navigation works (tap cards)
- [ ] Camera opens (Document upload)
- [ ] No console errors (F12)
- [ ] Build succeeds: `npm run build`

If all checked ✅ - You're ready!

## 🆘 Need Help?

1. Check browser console (F12)
2. Read error messages
3. Check README.md troubleshooting section
4. Verify all dependencies installed
5. Try clean install: `rm -rf node_modules && npm install`

## 📱 Mobile Testing Checklist

When testing on real device:
- [ ] PWA installs (Add to Home Screen)
- [ ] Camera opens
- [ ] Can capture photo
- [ ] Can switch camera
- [ ] Image preview works
- [ ] Project selection works
- [ ] Document sends successfully
- [ ] Works offline (after first visit)
- [ ] Icons show on home screen
- [ ] Splash screen displays

---

**Happy Coding! 💻**
**موفق باشید! 🎉**
