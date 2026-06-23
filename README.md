# Entwy Landing Page

A modern, responsive landing page for Entwy - an AI-powered enterprise platform built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Beautiful gradient-based UI with purple theme
- ✨ Animated twinkling stars background effect
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Interactive accordion sections
- 🔧 Modern React with Hooks

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── TwinklingStars.jsx
├── pages/
│   └── home.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS transformation tool

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette.

### Components
All components are modular and can be easily customized or reused in other projects.

### Content
Update the `features` and `industries` arrays in `src/pages/home.jsx` to modify the landing page content.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## License

© 2024 Entwy. All rights reserved.
