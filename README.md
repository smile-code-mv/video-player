
# Video Player

A web-based video player and media library built with React, TypeScript, and Node.js.

The goal is to build a full-stack application with video playback, media management, a REST API, and database integration.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Sass

### Backend
- Node.js
- Express
- TypeScript
- REST API

### Database
- SQLite (planned)

## Project Structure

```text
video-player/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- Yarn
- Git

### Clone the Repository

```bash
git clone <repository-url>
cd video-player
```

### Frontend Setup

```bash
cd frontend
yarn install
yarn dev
```

Vite will display the development URL in the terminal.

### Backend Setup

Open another terminal:

```bash
cd backend
yarn install
yarn dev
```

The backend is expected to run at `http://localhost:3000`.

## Available Scripts

### Frontend

| Command | Description |
|---|---|
| `yarn dev` | Start the Vite development server |
| `yarn build` | Build the frontend for production |
| `yarn preview` | Preview the production build |

### Backend

| Command | Description |
|---|---|
| `yarn dev` | Run the backend in development mode |
| `yarn build` | Compile TypeScript |
| `yarn start` | Run the compiled backend |

## Planned Features

- [ ] Video playback controls
- [ ] Media library
- [ ] Video metadata and thumbnails
- [ ] Playback progress tracking
- [ ] REST API integration
- [ ] SQLite database
- [ ] Input validation and error handling
- [ ] Automated tests
- [ ] Production deployment

## Development Goals

- Build reusable React components and custom hooks.
- Practice TypeScript in frontend and backend development.
- Design and implement REST APIs.
- Handle asynchronous operations and errors.
- Learn relational database design with SQLite.
- Implement automated testing and production builds.

## License

No license has been specified yet.
