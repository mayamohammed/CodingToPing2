## Plan: Containerize Vite React App

TL;DR - Build a reproducible Docker setup: a production multi-stage `Dockerfile` that builds the Vite React SPA and serves `dist/` with `nginx`, plus an optional `docker-compose.yml` for in-container development using the Vite dev server. Also include clear dev-run steps for `npm run dev` (local and in-container).

**Dev-run steps (user request)**
1. Prerequisites: install Node (>=18) and npm. Confirm with `node -v` and `npm -v`.
2. Install dependencies:
   - Run `npm ci` (preferred) or `npm install` in the project root.
3. Start dev server locally:
   - Run `npm run dev`.
   - Vite default dev port is `5173`. Open `http://localhost:5173`.
4. If running inside a container or wanting access from other devices:
   - Run `npm run dev -- --host 0.0.0.0` (or add a script `"dev:host": "vite --host"` to `package.json`).
5. Quick in-container dev example (one-shot with Node image):
   - `docker run --rm -it -v $(pwd):/app -w /app -p 5173:5173 node:20-alpine sh -c "npm ci && npm run dev -- --host 0.0.0.0"`
6. Troubleshooting:
   - If port is in use, change port with `npm run dev -- --port 3000`.
   - If file changes not detected in container, set `CHOKIDAR_USEPOLLING=true` or use a docker-compose bind mount with proper permissions.

**Steps (full plan recap)**
1. Add `.dockerignore` to exclude `node_modules`, `dist`, logs.
2. Create a multi-stage `Dockerfile` (Node build -> Nginx serve) that runs `npm ci` and `npm run build`, copies `dist/` into `nginx:stable-alpine`, and provides SPA fallback.
3. Create `nginx/default.conf` with `try_files $uri $uri/ /index.html;`.
4. (Optional) Create `docker-compose.yml` with `dev` service mapping `5173:5173` (bind mount) and `web` for production.
5. Add README commands for dev and production container usage.

**Relevant files**
- [package.json](package.json) — confirm `dev`/`build`/`preview` scripts
- [vite.config.js](vite.config.js) — check `base` if deploying to subpath
- [index.html](index.html)
- [src/main.jsx](src/main.jsx)

**Verification (dev)**
- `npm ci` then `npm run dev` → open `http://localhost:5173` and confirm the app loads and hot reload works.
- For in-container dev, run the `docker run` example above and open `http://localhost:5173`.

**Next step**
- Do you want me to scaffold a small `docker-compose.yml` dev service now (recommended), or just the production `Dockerfile` + nginx? (If "dev compose", I will create the compose file and a short README snippet.)
