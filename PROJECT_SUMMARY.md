# UWED MUN Website - Project Summary

## ✅ Completed Features

### 🎨 Design & Styling
- ✅ Modern, minimalistic, and visually captivating design
- ✅ UWED blue color scheme (#0066CC)
- ✅ Light background with subtle gradients
- ✅ Clean typography (Inter, Poppins, Playfair Display)
- ✅ Glassmorphism effects
- ✅ Fully responsive (desktop, tablet, mobile)

### 🎯 Core Sections

#### 1. **Hero Section** (`Hero.jsx`)
- ✅ Full-screen hero with animated background
- ✅ Mouse-responsive floating elements
- ✅ "Where diplomacy meets dialogue" tagline
- ✅ CTA buttons: "About MUN" and "Join Us"
- ✅ Fixed navigation with smooth scroll
- ✅ Scroll indicator

#### 2. **About Section** (`About.jsx`)
- ✅ Mission statement and history
- ✅ Statistical cards (10+ years, 500+ delegates, 25+ conferences)
- ✅ Animated timeline with 4 milestones
- ✅ Fade-in animations

#### 3. **Events Section** (`Events.jsx`)
- ✅ Upcoming conferences with date/location
- ✅ Past events carousel
- ✅ Hover effects on event cards
- ✅ Gradient backgrounds

#### 4. **Committees Section** (`Committees.jsx`)
- ✅ Interactive 6-committee grid (UNSC, UNHRC, WHO, UNEP, SOCHUM, ECOSOC)
- ✅ Hover effects revealing descriptions and topics
- ✅ Color-coded committee cards
- ✅ Animated background patterns

#### 5. **Team Section** (`Team.jsx`)
- ✅ Secretariat members with roles
- ✅ Circular profile cards
- ✅ Hover overlays with descriptions
- ✅ "Join Our Team" CTA

#### 6. **Contact Section** (`Contact.jsx`)
- ✅ Registration form (name, email, university, phone, message)
- ✅ Gradient UWED blue background
- ✅ Social media links
- ✅ Glassmorphism contact form

#### 7. **Footer** (`Footer.jsx`)
- ✅ UWED MUN logo and description
- ✅ Quick links navigation
- ✅ Resources section
- ✅ Contact information
- ✅ Copyright

### ✨ Animations & Interactions
- ✅ Scroll-triggered fade-ins
- ✅ Animated underlines on hover
- ✅ Floating elements in hero
- ✅ Micro-interactions on buttons and cards
- ✅ Smooth scroll between sections
- ✅ Hover transformations

### 🛠️ Technical Stack
- ✅ React 18 with Vite
- ✅ Tailwind CSS with custom configuration
- ✅ PostCSS and Autoprefixer
- ✅ Custom useScrollAnimation hook
- ✅ Intersection Observer API
- ✅ ES6+ JavaScript

## 📋 How to Run

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 🎨 Design Highlights

### Color Palette
- **UWED Blue**: #0066CC (Primary)
- **UWED Dark**: #004499 (Accent)
- **UWED Light**: #3388DD (Highlights)
- **White**: #FFFFFF (Background)
- **Gray Scale**: Various shades for text and borders

### Typography
- **Display**: Poppins (Headings)
- **Body**: Inter (Content)
- **Serif**: Playfair Display (Decorative elements)

### Animations
- **Fade-in**: 0.6s ease-in-out
- **Slide-up**: 0.6s ease-out
- **Float**: 3s infinite ease-in-out
- **Hover**: Scale, shadow, color transitions

## 📱 Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization Points

### Update Events
Edit `src/components/Events.jsx` - `upcomingEvents` and `pastEvents` arrays

### Update Team Members
Edit `src/components/Team.jsx` - `teamMembers` array

### Update Committees
Edit `src/components/Committees.jsx` - `committees` array

### Update Colors
Edit `tailwind.config.js` - `extend.colors` object

### Update Timeline
Edit `src/components/About.jsx` - Milestone objects

## 📁 File Structure

```
uwed-mun/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Committees.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── SETUP.md
└── PROJECT_SUMMARY.md
```

## 🚀 Ready to Deploy

The website is fully functional and ready for:
- Local development
- Production deployment
- Static hosting (Vercel, Netlify, GitHub Pages)

---

**Built with ❤️ for UWED Model United Nations**

