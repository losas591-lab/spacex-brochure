# SpaceX Mission Dashboard

A futuristic SpaceX-inspired mission dashboard built with Next.js 14, featuring rockets, missions, animations, and Elon Musk–themed UI.

## Getting Started

First, clone the repository and install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
spacex-brochure/
├── app/
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation bar component
│   ├── Footer.tsx        # Footer component
│   └── RocketCard.tsx    # Reusable rocket card component
├── data/
│   ├── rockets.json      # Rocket data
│   └── missions.json     # Mission data
├── public/               # Static assets (images, icons, etc.)
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md             # This file
```

## Features

- ✨ Modern Next.js 14 with App Router
- 🎨 Beautiful gradient backgrounds and responsive design
- 🚀 Reusable React components
- 📱 Mobile-friendly layout
- 🔥 Interactive hover effects
- 📊 Dynamic data from JSON files
- ♿ TypeScript support

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS** - Styling

## License

MIT License - feel free to use this project for your own purposes.
