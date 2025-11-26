# Icon Replacement Instructions

The PWA icons in `/public/icons/` are currently SVG placeholders.

For production use, replace them with actual PNG files:

## Steps to Replace Icons:

### Option 1: Use the provided logo (image1)
1. Convert the logo to PNG format
2. Create two sizes:
   - 192x192 pixels
   - 512x512 pixels
3. Place them in `/public/icons/` with the exact names:
   - `icon-192x192.png`
   - `icon-512x512.png`

### Option 2: Use an online tool
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload your logo
3. Generate PWA icons
4. Download and replace the icons

### Option 3: Use ImageMagick (command line)
```bash
# For 192x192
convert logo.png -resize 192x192 -background none -gravity center -extent 192x192 icon-192x192.png

# For 512x512
convert logo.png -resize 512x512 -background none -gravity center -extent 512x512 icon-512x512.png
```

## Current Placeholders

The current SVG files will work but are not optimal. They feature:
- Orange background (#EF5530) matching the app theme
- White geometric shapes
- Persian text "حسابرسیار"

## Testing Icons

After replacement:
1. Clear browser cache
2. Rebuild the app: `npm run build`
3. Test PWA installation on mobile
4. Verify icons appear correctly on home screen

## Note

PWA manifest (`manifest.webmanifest`) is auto-generated and points to these icon files. No changes needed to the manifest after replacing the icons.
