## Quick orientation

This repository is a hybrid Expo (React Native) frontend plus a small Express backend. The frontend lives in `app/` and is an Expo project (see top-level `package.json`). The backend is a separate Node/Express app under `backend/` (uses ESM and `dotenv`).

Keep changes small and local to the area you're editing. Important top-level files/directories:
- `app/` — Expo Router file-based routes and screens (JSX/TSX mixed). Example: `app/_layout.jsx`, `app/(home)/index.jsx`, `app/(home)/services.jsx`.
- `components/` — shared UI components in TypeScript (e.g. `ThemedView.tsx`, `ThemedText.tsx`).
- `component/` — older/screens UI in JSX (e.g. `Ride.jsx`, `Detail.jsx`). Be mindful of the different conventions between these two folders.
- `backend/` — Express backend (controllers, routes, `server.js`, `db/`). Backend default port is 3000 (`backend/server.js`).
- `scripts/reset-project.js` — resets starter code; don't remove or rename it.

## How to run (developer workflows)
- Install frontend deps: `npm install` (root). Frontend dev start: `npx expo start` or `npm run start`.
- Platform build/run: `npm run android`, `npm run ios`, `npm run web` (scripts in root `package.json`).
- Backend: from `backend/` run `npm install` then `node server.js`. The backend expects environment variables (loads `dotenv`), so set `.env` in `backend/` when necessary. Default port is 3000.

Notes:
- The frontend uses Expo Router (file-based routing). Adding/removing route files under `app/` immediately affects route paths — keep index filenames for route roots.
- Many frontend files are `.jsx` while shared UI components are `.tsx`. If you introduce TypeScript files, ensure `tsconfig.json` and project conventions are respected.

## Project-specific patterns and gotchas
- File-based routing grouping: folders named with parentheses (e.g. `(home)`) are used as route groups — don't rename/move those without checking Expo Router behavior.
- The codebase mixes two component folders: `components/` (TSX themed components) and `component/` (JSX screens). Prefer adding new shared UI to `components/` when possible.
- ESLint includes a custom plugin `no-text-outside-text` (see `eslint-rules/`). Follow this when moving text nodes.
- Authentication flow: backend uses JWTs and a token blacklist (`backend/blacklist/blackListToken.model.js`) and `backend/middlewares/auth.middleware.js`. When editing auth, update both controller logic and blacklist handling.

## Integration points & cross-component communication
- Frontend ↔ Backend: HTTP API calls target the Express server (default `http://localhost:3000`). Search for fetch/XHR calls to discover specific endpoints (user routes live under `backend/routes/user.routes.js`).
- Database: backend uses Mongoose (see `backend/db/db.js`) — keep migration/seed responsibilities within `backend/`.

## Files to look at when changing behavior
- Frontend routes & layouts: `app/_layout.jsx`, `app/(home)/index.jsx`.
- UI primitives: `components/ThemedView.tsx`, `components/ThemedText.tsx`, `components/ParallaxScrollView.tsx`.
- Backend entry & wiring: `backend/server.js`, `backend/app.js`, `backend/db/db.js`.
- Backend auth and user areas: `backend/middlewares/auth.middleware.js`, `backend/controllers/user.controller.js`, `backend/routes/user.routes.js`, `backend/blacklist/blackListToken.model.js`.

## Small examples for the agent
- Add a new route: create `app/newscreen/index.jsx` with a default export; it becomes `/newscreen`.
- Add a shared UI atom: put a typed component in `components/` and import it into `.jsx` screens — avoid renaming existing `.jsx` files to `.tsx` without updating tsconfig and types.
- Change backend route: modify `backend/routes/*.js` and update matching controller in `backend/controllers/`.

## Testing & lint
- Lint: `npm run lint` (root) uses Expo ESLint config and the custom plugin.
- There are no automated tests in the repo; keep changes small and manually verify by running the app and backend.

If anything above is unclear or you'd like more examples (e.g. common API endpoints, sample fetch call locations, or a suggested starter test), tell me which area to expand and I will iterate on this file.
