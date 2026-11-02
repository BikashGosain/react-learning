# Todos List

A simple todo list app built with React while learning React fundamentals and client-side routing with React Router.

## Features

- Add a todo with a title and description (blank fields are rejected)
- Delete todos
- Todos are saved in `localStorage`, so they persist after a page refresh
- Multi-page navigation with React Router (Home and About)
- Active nav link highlighting
- Responsive navbar with a drawer menu on small screens

> **Note:** the search bar in the header is UI only and is not functional yet.

## Tech Stack

- [React](https://react.dev/) 19 (Create React App)
- [React Router](https://reactrouter.com/) 7 (declarative mode)
- Bootstrap 6 (alpha), loaded from the jsDelivr CDN
- `localStorage` for persistence

## Routes

| Path     | Page  | Content                         |
| -------- | ----- | ------------------------------- |
| `/`      | Home  | Add Todo form and the todos list |
| `/about` | About | About page                      |

`Header` and `Footer` are rendered outside `<Routes>`, so they appear on every page.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

### Installation

```bash
git clone https://github.com/BikashGosain/react-learning.git
cd react-learning
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm start`     | Run the app in development mode      |
| `npm run build` | Create a production build in `build/` |
| `npm test`      | Run tests in watch mode              |

## Project Structure

```
todos-list/
├── public/
│   └── index.html          # Loads Bootstrap from CDN
└── src/
    ├── App.js              # State, localStorage, routes
    ├── index.js
    └── MyComponents/
        ├── Header.js       # Navbar with Link/NavLink
        ├── AddTodo.js      # Add todo form
        ├── Todos.js        # Todos list
        ├── TodoItem.js     # Single todo card
        ├── About.js        # About page
        └── Footer.js
```

## How It Works

- `App` holds the `todos` state and the `addTodo` / `ondelete` handlers, so todos are kept when switching between Home and About.
- A `useEffect` writes the todos to `localStorage` whenever they change, and the initial state is read from it on load.
- `<BrowserRouter>` wraps the app, and `NavLink` in the header handles navigation without a full page reload.

## Roadmap

- [ ] Make the search bar filter todos
- [ ] Mark todos as completed
- [ ] Edit existing todos
- [ ] Deploy (Netlify, Vercel or GitHub Pages)

## Author

**Bikash Gosain**

- GitHub: [@BikashGosain](https://github.com/BikashGosain)
- LinkedIn: [bikash-gosain](https://www.linkedin.com/in/bikash-gosain/)