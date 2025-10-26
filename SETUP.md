# UWED MUN Website - Quick Start Guide

## 🚀 Getting Started

### Step 1: Install Dependencies

Run the following command in your terminal:

```bash
npm install
```

This will install all required dependencies including:
- React 18
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
uwed-mun/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Committees.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/       # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── App.jsx      # Main App component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'uwed-blue': '#0066CC',   // Primary blue
  'uwed-dark': '#004499',   // Dark blue
  'uwed-light': '#3388DD',   // Light blue
}
```

### Content

Edit component files in `src/components/`:

- **Hero.jsx** - Landing page and navigation
- **About.jsx** - Mission, stats, and timeline
- **Events.jsx** - Conferences and workshops
- **Committees.jsx** - Committee details
- **Team.jsx** - Secretariat members
- **Contact.jsx** - Registration form
- **Footer.jsx** - Links and copyright

## 🎯 Features

✅ Responsive design for all devices  
✅ Smooth scroll animations  
✅ Interactive hover effects  
✅ Glassmorphism effects  
✅ UWED blue color scheme  
✅ Modern typography (Inter, Poppins, Playfair Display)  
✅ Micro-interactions and transitions  

## 📝 Notes

- This is a **frontend-only** project (no backend)
- Form submissions are placeholder (alert message)
- All images use emoji placeholders
- Social media links are placeholder URLs

---

Happy coding! 🎉

