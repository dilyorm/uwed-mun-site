# UWED Model United Nations Website

A modern, minimalistic, and visually captivating website for UWED MUN (University of World Economy and Diplomacy Model United Nations).

## 🌟 Features

- **Modern React + Vite** setup for fast development
- **Tailwind CSS** for styling with custom UWED blue color scheme
- **Fully Responsive** design for all devices
- **Smooth Animations** and micro-interactions
- **Interactive Sections**:
  - Hero section with animated background
  - About section with mission and timeline
  - Events section with upcoming and past conferences
  - Committees grid with hover effects
  - Team member profiles
  - Contact form with registration
  - Footer with links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd uwed-mun
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
uwed-mun/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Events.jsx
│       ├── Committees.jsx
│       ├── Team.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md
```

## 🎨 Design Features

- **UWED Blue Color Scheme**: Custom blue palette (#0066CC) with gradients
- **Typography**: Inter for body text, Poppins for headings, Playfair Display for accents
- **Animations**: Fade-ins, slide-ups, floating elements, hover effects
- **Glassmorphism**: Modern glass-like effects in contact section
- **Micro-interactions**: Smooth transitions on all interactive elements

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📝 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'uwed-blue': '#0066CC',
  'uwed-dark': '#004499',
  'uwed-light': '#3388DD',
}
```

### Content

Update the content in each component file in `src/components/`:
- Modify event dates and details in `Events.jsx`
- Update team members in `Team.jsx`
- Change committee information in `Committees.jsx`
- Edit mission and timeline in `About.jsx`

## 📄 License

This project is created for UWED Model United Nations.

## 👥 Contributing

This is a frontend-only project for display purposes. No backend functionality is included.

---

**Built with ❤️ for UWED MUN**

