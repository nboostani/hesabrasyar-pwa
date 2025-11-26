# حسابرسیار (Hesabrasyar) - PWA

<div dir="rtl">

## نمای کلی پروژه

**حسابرسیار** یک Progressive Web App (PWA) مبتنی بر React برای مدیریت اسناد و اسکن موبایل با پشتیبانی کامل از زبان فارسی و چیدمان RTL است.

این یک برنامه نمایشی/آزمایشی است که قابلیت‌های مدیریت اسناد موبایل را با **دسترسی واقعی به دوربین** نشان می‌دهد.

</div>

---

## ✨ Features

### Core Functionality
- ✅ **Real Camera Access** - Live camera feed using MediaDevices API
- ✅ **Document Scanning** - Capture and upload documents to projects
- ✅ **PWA Support** - Installable on mobile devices (Android/iOS)
- ✅ **Offline Capability** - Works offline with service worker caching
- ✅ **RTL Layout** - Full Persian language support with right-to-left layout
- ✅ **Responsive Design** - Mobile-first, works on all screen sizes

### UI Components
- 🎨 **Color Palette** - Extracted from logo (#EF5530 primary orange)
- 💫 **Smooth Animations** - Fade, slide, and scale transitions
- 🎯 **Touch-Optimized** - Large touch targets for mobile devices
- 📱 **Native-like Experience** - Feels like a native mobile app

### Main Features
1. **بارگذاری اسناد به پروژه‌ها** (Upload documents to projects) - Full camera capture flow
2. **لیست شرکت‌ها** (List of companies) - Company management (placeholder)
3. **لیست پروژه‌ها** (List of projects) - Project overview (placeholder)
4. **تایم‌شیت کارکنان** (Timesheet employees) - Time tracking (placeholder)

---

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3** - UI framework
- **Vite 7.2** - Build tool and dev server
- **React Router 6.20** - Client-side routing
- **React Icons 4.12** - Icon library

### PWA & Performance
- **vite-plugin-pwa 0.17** - PWA manifest and service worker generation
- **Workbox 7.0** - Service worker strategies
- **CSS Modules** - Scoped component styling

### Fonts & Typography
- **Vazirmatn 33.0** - Persian font family

---

## 📁 Project Structure

```
hesabrasyar-pwa/
├── public/
│   ├── icons/                      # PWA icons
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   └── index.html                  # HTML entry point
├── src/
│   ├── components/
│   │   ├── common/                 # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Toast.jsx
│   │   ├── SplashScreen.jsx       # App splash screen
│   │   ├── MainMenu.jsx           # Main menu dashboard
│   │   ├── CameraCapture.jsx      # Real camera interface
│   │   ├── DocumentUpload.jsx     # Document upload flow
│   │   ├── ProjectSelector.jsx    # Project selection
│   │   ├── CompanyList.jsx        # Companies (placeholder)
│   │   ├── ProjectList.jsx        # Projects (placeholder)
│   │   └── EmployeeTimesheet.jsx  # Timesheets (placeholder)
│   ├── hooks/
│   │   ├── useCamera.js           # Camera access hook
│   │   └── useToast.js            # Toast notifications hook
│   ├── styles/
│   │   ├── variables.css          # CSS variables (colors, spacing)
│   │   └── global.css             # Global styles and RTL setup
│   ├── utils/
│   │   ├── constants.js           # Mock data
│   │   └── helpers.js             # Helper functions
│   ├── App.jsx                    # Main app component with routing
│   └── main.jsx                   # React entry point
├── vite.config.js                 # Vite configuration with PWA setup
├── package.json                   # Dependencies
└── README.md                      # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** 9+ installed
- A modern web browser (Chrome, Safari, Firefox)
- For camera testing: HTTPS connection or localhost

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Testing on Mobile Devices

### Camera Access Requirements
⚠️ **IMPORTANT**: Camera access requires either:
- HTTPS connection (secure context)
- `localhost` (development only)

### Testing on Android (Chrome)

1. **Connect via network:**
   ```bash
   npm run dev -- --host
   ```
   Access via `http://YOUR_IP:5173` on your phone

2. **Or use ngrok/tunneling service:**
   ```bash
   npx ngrok http 5173
   ```

3. **Install PWA:**
   - Open the app in Chrome
   - Tap the menu (⋮) → "Add to Home screen"
   - Launch from home screen

### Testing on iOS (Safari)

1. Serve over HTTPS (required for camera on iOS)
2. Open in Safari
3. Tap Share button → "Add to Home Screen"
4. Launch from home screen

### Granting Camera Permissions

**First time:**
- Browser will prompt for camera access
- Select "Allow" to use the camera feature

**If denied:**
- Go to browser settings
- Find site permissions
- Enable camera access for the app

---

## 🎨 Color Palette

Extracted from the provided logo:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | `#EF5530` | Buttons, accents, active states |
| Orange Dark | `#D64420` | Hover states |
| Orange Light | `#FF6B47` | Highlights |
| Dark Accent | `#2D2D2D` | Headers, text |
| Background Light | `#F5F5F5` | Page background |
| Background White | `#FFFFFF` | Cards, containers |
| Text Primary | `#333333` | Main text |
| Text Secondary | `#666666` | Secondary text |
| Success | `#4CAF50` | Success messages |
| Error | `#F44336` | Error messages |

---

## 📸 Camera Implementation Details

### Real Camera Access (NOT Mock)

The app uses the **MediaDevices API** for real camera access:

```javascript
const constraints = {
  video: {
    facingMode: { ideal: "environment" }, // Back camera
    width: { ideal: 1920 },
    height: { ideal: 1080 }
  }
};

const stream = await navigator.mediaDevices.getUserMedia(constraints);
```

### Features:
- ✅ Live video preview
- ✅ Capture high-quality images (JPEG, 90% quality)
- ✅ Switch between front/back camera
- ✅ Visual guide overlay for document positioning
- ✅ Preview captured image before confirmation
- ✅ Retake option
- ✅ Persian error messages for all camera issues

### Error Handling:
- **NotAllowedError**: "دسترسی به دوربین رد شد"
- **NotFoundError**: "دوربین در دسترس نیست"
- **NotReadableError**: "دوربین توسط برنامه دیگری استفاده می‌شود"

---

## 🎯 Usage Flow

### Document Upload Flow

1. **Launch App** → Splash screen (2.5s)
2. **Main Menu** → Tap "بارگذاری اسناد به پروژه‌ها"
3. **Camera Access** → Grant permission if prompted
4. **Capture Photo** → Position document in guide frame
5. **Confirm Image** → Preview and confirm or retake
6. **Select Project** → Choose from list of 5 projects
7. **Send Document** → Tap "ارسال سند" button
8. **Success** → Confirmation message, auto-redirect to menu

---

## 🐛 Troubleshooting

### Camera not working?

1. **Check HTTPS**: Camera requires secure context
2. **Check permissions**: Browser settings → Site permissions
3. **Check camera availability**: Another app might be using it
4. **Try different browser**: Test in Chrome/Safari

### PWA not installing?

1. **Check manifest**: Should be served at `/manifest.webmanifest`
2. **Check HTTPS**: PWA requires secure connection
3. **Check service worker**: Should register successfully
4. **Clear cache**: Hard reload (Ctrl+Shift+R)

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.1",
  "react-icons": "^4.12.0",
  "vazirmatn": "^33.0.3"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^7.2.4",
  "vite-plugin-pwa": "^0.17.4",
  "workbox-window": "^7.3.0"
}
```

---

<div dir="rtl">

## نصب و راه‌اندازی (فارسی)

### نیازمندی‌ها
- Node.js نسخه 18 یا بالاتر
- مرورگر مدرن با پشتیبانی از دوربین

### مراحل نصب

1. نصب وابستگی‌ها:
```bash
npm install
```

2. اجرای سرور توسعه:
```bash
npm run dev
```

3. باز کردن مرورگر در آدرس:
```
http://localhost:5173
```

### تست روی موبایل

برای تست عملکرد دوربین، حتماً از اتصال HTTPS استفاده کنید یا از ابزارهایی مثل ngrok استفاده نمایید.

</div>

---

**Built with ❤️ for Persian users**
