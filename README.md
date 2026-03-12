# jobs-demo-api

[![CI](https://github.com/Yanseydc/jobs-demo-api/actions/workflows/ci.yml/badge.svg)](https://github.com/Yanseydc/jobs-demo-api/actions/workflows/ci.yml)

Minimal Node.js API with Express, Jest, Docker, and GitHub Actions CI/CD.

## Endpoints

- `GET /`
- `GET /health`

Example root response:

```json
{
  "message": "jobs-demo-api running",
  "health": "/health"
}
```

## Local development

```bash
npm ci
npm run lint
npm test
npm start
```

The API starts on `http://localhost:3000`.

## Render

Once deployed, your base URL should return the root JSON response.

Example:

```text
https://your-render-service.onrender.com/
https://your-render-service.onrender.com/health
```

## Docker

Build the image:

```bash
docker build -t jobs-demo-api:local .
```

Run the container:

```bash
docker run -p 3000:3000 jobs-demo-api:local
```

## GitHub Actions pipeline

The workflow lives in `.github/workflows/ci.yml`.

What it does:

- Runs lint and tests on Node 18 and Node 20.
- Builds the Docker image after the test matrix passes.
- Publishes the Docker image to GitHub Container Registry as `ghcr.io/yanseydc/jobs-demo-api` on pushes to `main`.
- Triggers a Render deploy on pushes to `main` when `RENDER_DEPLOY_HOOK_URL` is configured.

## Required GitHub settings

To publish the image to GitHub Container Registry, the workflow uses the built-in `GITHUB_TOKEN`.

To enable Render deploys, add this repository secret:

- `RENDER_DEPLOY_HOOK_URL`: Render deploy hook URL for your service.

If the Render secret is not configured, the deploy job is skipped.
