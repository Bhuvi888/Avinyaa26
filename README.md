# Avinyaa26

A modern React website built with Vite and Tailwind CSS v4.

## 🚀 Tech Stack

- **React** 19.2
- **Vite** 7.x
- **Tailwind CSS** 4.x
- **React Router** 7.x

## 📁 Project Structure

```
src/
├── components/
│   └── layout/
│       ├── Header.jsx      # Navigation header
│       ├── Footer.jsx      # Site footer
│       ├── Layout.jsx      # Main layout wrapper
│       └── index.js        # Barrel exports
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Events.jsx          # Events listing
│   ├── About.jsx           # About us
│   ├── Contact.jsx         # Contact form
│   └── index.js            # Barrel exports
├── router/
│   └── index.jsx           # Route configuration
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Avinyaa26

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 📄 Pages

| Route      | Component     | Description                         |
| ---------- | ------------- | ----------------------------------- |
| `/`        | `Home.jsx`    | Landing page with hero and features |
| `/events`  | `Events.jsx`  | Events listing and details          |
| `/about`   | `About.jsx`   | Team and mission info               |
| `/contact` | `Contact.jsx` | Contact form                        |

## 👥 Team Workflow

Each page is designed as an independent module for easy collaboration:

1. **Work on your assigned page** in `src/pages/`
2. **Create feature branches** for your changes
3. **Keep components modular** and reusable
4. **Use the barrel exports** for clean imports

### Adding a New Page

1. Create your page component in `src/pages/YourPage.jsx`
2. Export it from `src/pages/index.js`
3. Add the route in `src/router/index.jsx`
4. Add navigation link in `src/components/layout/Header.jsx`

## 🚢 Deployment

The project includes configuration for Vercel deployment with SPA routing support.

```bash
# Build for production
npm run build
```

## 📝 License

MIT
