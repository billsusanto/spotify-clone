# 🎵 Spotify Clone - Modern Redesign

> A production-ready, fully responsive Spotify clone built with Next.js 14, React, TypeScript, Tailwind CSS, and modern frontend technologies.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

### 🎨 Modern Design System
- **Spotify-inspired UI** with premium aesthetic
- **Dark mode** by default with carefully crafted color palette
- **Smooth animations** powered by Framer Motion
- **Glassmorphism effects** and gradient overlays
- **Custom typography** with Inter and Poppins fonts

### 🎵 Music Player Features
- **Persistent audio player** across all pages
- **Play/Pause, Next, Previous** controls
- **Volume control** with mute functionality
- **Progress bar** with seek functionality
- **Shuffle and Repeat** modes
- **Queue management** with Zustand state management

### 📱 Pages & Navigation
- **Home** - Personalized greeting, recently played, curated playlists
- **Search** - Browse categories, search songs, albums, artists
- **Library** - Grid/List view toggle, filtering, sorting
- **Playlist** - Detailed view with track list and metadata
- **Album** - Album details with dynamic gradient header
- **Artist** - Artist profile with popular tracks and discography

### 🎯 User Experience
- **Fully responsive** - Mobile, tablet, and desktop optimized
- **Keyboard shortcuts** - Space to play/pause, arrow keys for seek/volume
- **Accessibility (WCAG AA)** - Screen reader support, ARIA labels, focus management
- **Smooth page transitions** with Next.js App Router
- **Optimized performance** - Code splitting, lazy loading, virtual scrolling

### 🛠️ Technical Features
- **TypeScript** for type safety
- **Zustand** for lightweight state management
- **Framer Motion** for smooth animations
- **Custom hooks** for reusable logic
- **Mock data** for development and testing
- **Production-ready** build configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/billsusanto/spotify-clone.git

# Navigate to project directory
cd spotify-clone

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
spotify-clone/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── album/[id]/        # Album detail pages
│   │   ├── artist/[id]/       # Artist detail pages
│   │   ├── library/           # Library page
│   │   ├── playlist/[id]/     # Playlist detail pages
│   │   ├── search/            # Search page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── AlbumCard.tsx
│   │   │   ├── ArtistCard.tsx
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── PlaylistCard.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── TrackRow.tsx
│   │   ├── BottomNav.tsx     # Mobile bottom navigation
│   │   ├── PageLayout.tsx    # Page wrapper component
│   │   ├── Player.tsx        # Audio player component
│   │   └── Sidebar.tsx       # Desktop sidebar navigation
│   ├── lib/                  # Utility functions
│   │   ├── mockData.ts       # Mock data for development
│   │   └── utils.ts          # Helper functions
│   ├── store/                # State management
│   │   └── usePlayerStore.ts # Zustand store for player
│   └── types/                # TypeScript types
│       └── index.ts          # Type definitions
├── public/                   # Static assets
├── .gitignore               # Git ignore rules
├── next.config.mjs          # Next.js configuration
├── netlify.toml             # Netlify deployment config
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Design System

### Color Palette

```css
/* Primary */
--spotify-green: #1DB954
--spotify-green-hover: #1ED760
--spotify-green-active: #169C46

/* Accent */
--spotify-purple: #8B5CF6

/* Backgrounds */
--spotify-black: #000000
--spotify-dark-charcoal: #121212
--spotify-dark-gray: #282828
--spotify-dark-surface: #181818

/* Text */
--spotify-white: #FFFFFF
--spotify-light-gray: #B3B3B3
--spotify-medium-gray: #6A6A6A
```

### Typography

- **Primary Font**: Inter (300, 400, 500, 600, 700, 800, 900)
- **Display Font**: Poppins (600, 700, 800, 900)
- **Monospace Font**: JetBrains Mono (400, 500)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration (if connecting to real Spotify API)
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

# Optional: Analytics
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id
```

### Deployment

#### Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/billsusanto/spotify-clone)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

#### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/billsusanto/spotify-clone)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with one click!

## 🎯 Roadmap

- [ ] Integration with Spotify Web API
- [ ] User authentication with NextAuth.js
- [ ] Real audio playback functionality
- [ ] Lyrics display integration
- [ ] Create and manage playlists
- [ ] Follow/Unfollow artists
- [ ] Social features (share tracks, collaborative playlists)
- [ ] Podcast support
- [ ] Download for offline listening
- [ ] Cross-device sync

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [Spotify](https://spotify.com)
- Icons from [Lucide React](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📧 Contact

**Bill Susanto** - [@billsusanto](https://github.com/billsusanto)

Project Link: [https://github.com/billsusanto/spotify-clone](https://github.com/billsusanto/spotify-clone)

---

<p align="center">Made with ❤️ and ☕</p>
