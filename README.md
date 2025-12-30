# PhaserAI - React Halloween Website

A modern React conversion of the Halloween-themed website with enhanced animations and Tailwind CSS styling.

## 🎃 Features

- **React 18** with TypeScript
- **Tailwind CSS** for styling with custom Halloween theme
- **Framer Motion** for smooth animations and transitions
- **Swiper.js** for interactive carousels
- **Intersection Observer** for scroll-triggered animations
- **Responsive Design** that works on all devices
- **Enhanced Animations** including:
  - Floating elements
  - Fade-in effects
  - Scale animations
  - Particle effects
  - Hover interactions
  - Scroll-triggered animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd halloween-react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` and add your MailerLite API credentials.

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Orange (#FF6B35)
- Background: Green gradient
- Text: Light colors for contrast

### Animations
Animations are powered by Framer Motion and can be customized in each component:
- Hover effects
- Scroll animations
- Loading animations
- Particle systems

### Components Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation with mobile menu
│   ├── Home.tsx        # Hero section with Swiper
│   ├── Category.tsx    # Feature categories
│   ├── About.tsx       # About section
│   ├── Features.tsx    # Feature showcase
│   ├── Newsletter.tsx  # Email signup
│   ├── Footer.tsx      # Footer with social links
│   └── ScrollUp.tsx    # Scroll to top button
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## 🛠 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animation Features

- **Floating animations** for images
- **Stagger animations** for lists
- **Scroll-triggered** animations
- **Hover effects** with scale and glow
- **Particle systems** for magical effects
- **Smooth transitions** between sections
- **Loading animations** for interactive elements

## 🔧 Customizing Animations

To modify animations, edit the Framer Motion properties in each component:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 📦 Dependencies

- React 18.2.0
- Framer Motion 7.6.2
- Swiper 8.4.4
- Tailwind CSS 3.2.4
- React Intersection Observer 9.4.1
- TypeScript 4.9.4

## 🎃 Halloween Theme

The website maintains the spooky Halloween aesthetic with:
- Dark green gradient backgrounds
- Orange accent colors
- Floating ghost and pumpkin images
- Magical particle effects
- Smooth, eerie animations

## 🚀 Deployment

To deploy to production:

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## 📄 License

This project is open source and available under the MIT License.