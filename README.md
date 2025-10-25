# Doodle Client

Real-time collaborative drawing application built with Next.js, React, and Socket.IO.

## 🚀 Live Demo

**Try it now:** [https://doodle-app-gold.vercel.app](https://doodle-app-gold.vercel.app)

---

## Features

### 🎨 Drawing Tools
- **Pencil & Eraser** with customizable colors and brush sizes
- **Color Palette**: Black, Red, Green, Blue, Orange, Yellow, White
- **Brush Sizes**: Adjustable thickness for both pencil and eraser
- **Undo/Redo**: Full history management with safety checks

### 🤝 Real-time Collaboration
- **Private Rooms**: Each session gets a unique URL
- **Live Drawing**: See other users' strokes in real-time
- **Canvas Persistence**: New users see existing drawings immediately
- **Room Isolation**: Different rooms don't interfere with each other

### 🔗 Sharing & UX
- **Copy Room Link**: Modern toast notification system
- **Responsive Design**: Works on desktop and mobile
- **Smooth Performance**: Optimized for multiple concurrent users
- **Browser Navigation**: Handles back/forward buttons gracefully

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Socket.IO Client** - Real-time communication
- **Tailwind CSS** - Styling
- **FontAwesome** - Icons

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## Usage

1. **Start Drawing**: Visit the app to get a unique room URL
2. **Share Room**: Click the link icon to copy and share your room
3. **Collaborate**: Others join via the shared link to draw together
4. **Tools**: Use pencil/eraser, change colors and sizes
5. **History**: Undo/redo actions are synchronized across users

## Project Structure

```
src/
├── components/
│   ├── Board/          # Canvas and drawing logic
│   ├── Menu/           # Tool selection and actions
│   └── Toolbox/        # Color and size controls
├── pages/
│   ├── room/[roomId].js # Room-based collaboration
│   └── index.js        # Auto-redirect to new room
├── slice/              # Redux state management
└── styles/             # Global styles
```

## Environment Variables

```bash
# Socket.IO server URL (automatically configured)
NODE_ENV=development  # or production
```

## Deployment

Optimized for deployment on:
- **Vercel** (recommended for Next.js)
- Netlify
- Any static hosting platform

## Development Timeline

Built over 15 days with realistic commit history:
- Day 1-3: Next.js setup and basic structure
- Day 4-8: Drawing tools and canvas functionality  
- Day 9-12: Real-time collaboration with Socket.IO
- Day 13-15: Room system and UI improvements

## License

MIT

---

**Live Demo**: Deploy and share your room links for instant collaboration!
