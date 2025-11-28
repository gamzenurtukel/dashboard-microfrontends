# React Microfrontend Dashboard Architecture

This repository demonstrates a _microfrontend dashboard_ architecture using _React 19, **Vite, **Module Federation, **Tailwind CSS v4, and **Zustand_.  
The project consists of a _shell (host) application_ and _two microfrontends_ that can be developed, deployed, and scaled independently.

---

## Architecture Overview

The architecture consists of:

- _Shell (Host) Application_
  - Container app that provides the main layout, header, routing, and global state.
  - Integrates microfrontends via Module Federation.
- **User Card Microfrontend (user-card)**
  - Standalone React application exposed to the shell.
  - Renders user information and badges.
  - Triggers global filters (e.g., notifications/activities) via shared Zustand store.
- **Content Bar Microfrontend (content-bar)**
  - Standalone React application exposed to the shell.
  - Renders notification & activity feed.
  - Reacts to global filter state and local filter controls.

Each application is a complete React app with its own build process, dependencies, and (potential) deployment pipeline.  
They communicate mainly through:

- _Module Federation_ (host ↔ remotes)
- _Shared Zustand store_ (imported via shell/dashboard-store alias)

---

## Key Features

- _Independent Development_
  - shell, user-card, and content-bar can be developed and run independently.
- _Shared Dependencies_
  - Libraries such as react, react-dom, and zustand are shared via Module Federation to avoid duplication.
- _Global State Management with Zustand_
  - A centralized Zustand store in the shell manages:
    - Notification & activity items
    - Selected filter (all / notifications / activities)
    - UI states such as modal open/close
- _Tailwind CSS v4_
  - Consistent styling and utility-first design across all microfrontends.
- _Module Federation with Vite_
  - Host/remote configuration using @originjs/vite-plugin-federation.
- _TypeScript Support_
  - Full TypeScript support in all apps for better DX and type safety.

---

## Prerequisites

- _Node.js_ v20+
- _Yarn_ (classic 1.22+)
- Basic knowledge of:
  - React & TypeScript
  - Vite
  - Module Federation
  - Zustand (for global state)

---

## Project Structure

```bash
dashboard-microfrontends/
├── packages/
│   ├── shell/                # Host (container) application
│   │   ├── src/
│   │   │   ├── components/   # Layout, header, dashboard UI
│   │   │   ├── stores/       # Global Zustand store (dashboard-store)
│   │   │   └── ...
│   │   ├── package.json
│   │   └── vite.config.ts    # Vite + Module Federation configuration
│   ├── user-card/            # User Card microfrontend (remote)
│   │   ├── src/
│   │   │   ├── components/   # UserCard, badges
│   │   │   └── ...
│   │   ├── package.json
│   │   └── vite.config.ts    # Exposes UserCard via Module Federation
│   └── content-bar/          # Content Bar microfrontend (remote)
│       ├── src/
│       │   ├── components/   # ContentBar, filters, list view
│       │   └── ...
│       ├── package.json
│       └── vite.config.ts    # Exposes ContentBar via Module Federation
├── docs/
│   └── SETUP.md              # Setup & architecture documentation (this file)
├── package.json              # Root scripts (dev:all, etc.)
└── README.md                 # General project description
```
