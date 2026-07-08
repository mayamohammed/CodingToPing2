# CodingToPing2

## Run (development)

- Install dependencies:

```bash
npm ci
```

**What this does:**
- Installs exact npm packages from `package-lock.json` (deterministic, safe for teams)

- Start Vite dev server locally:

```bash
npm run dev
```

**What this does:**
- Runs Vite development server on `http://localhost:5173/`
- Hot reload enabled: changes to your code auto-refresh the browser
- Fast rebuild (Vite uses es build under the hood)

- Start Vite dev server inside a Docker container:

```bash
docker compose up dev
```

**What this does:**
- Spins up a `node:20-alpine` container
- Runs `npm ci` and `npm run dev -- --host 0.0.0.0` inside the container
- Binds your local project folder (`./`) into the container (live file sync)
- Maps port 5173 from container to host
- **Result:** accessible at `http://localhost:5173/` locally and `http://<your-host-ip>:5173/` on LAN

## Run (production - container)

- Build the production image:

```bash
docker build -t codingtoping-app:prod .
```

**What this does:**
- Reads the `Dockerfile` (multi-stage build)
- **Stage 1 (Build):** uses `node:20-alpine` to run `npm ci` and `npm run build` → produces optimized `dist/` folder
- **Stage 2 (Runtime):** copies only the `dist/` folder into an `nginx:stable-alpine` image (lightweight, ~8MB)
- Tags the final image as `codingtoping-app:prod`

- Run the production container locally:

```bash
docker run --rm -p 80:80 codingtoping-app:prod
```

**What this does:**
- `--rm` — automatically deletes the container when it exits (cleanup)
- `-p 80:80` — maps host port 80 to container port 80 (nginx listens on 80)
- `codingtoping-app:prod` — the image to run
- **Result:** nginx serves your static React app on `http://localhost`

Open `http://localhost` in browser to view the production build. For LAN access, use `http://<your-host-ip>` (e.g., `http://10.0.2.100`).

## Troubleshooting

- If `docker compose up dev` exits immediately, check the container logs:

```bash
docker compose logs --tail=200 dev
```

- If the dev server is not reachable on `http://localhost:5173`:
	- Ensure Vite is bound to `0.0.0.0` (compose runs it with `--host 0.0.0.0`).
	- Check for firewall rules or port conflicts.
	- Confirm Docker is running: `docker info`.

## Notes

- The production `Dockerfile` uses a multi-stage build (Node build stage + nginx runtime) and the nginx config provides SPA fallback (`try_files $uri $uri/ /index.html`).

