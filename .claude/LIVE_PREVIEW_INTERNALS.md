# Live Preview Tool Internals (Read-Only Reference)

**Purpose:** This document explains how the `deploy_preview` tool works. If you're an AI agent encountering persistent preview failures, READ THIS to understand what the tool expects and fix the USER'S CODE accordingly.

**IMPORTANT:** You CANNOT modify this tool. You can only:
1. Fix the user's project code to be compatible with the tool
2. Edit `.preview-config.json` to correct misconfigured deployments
3. Ensure the project structure matches what the tool expects
4. Report genuine tool bugs for human escalation

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    E2B Sandbox                       │
│                                                      │
│   Caddy Reverse Proxy (:4000)  ← ALWAYS USED        │
│     │                                                │
│     ├─── /api/* ──→ Backend (:3001)                 │
│     ├─── /health ─→ Backend (:3001)                 │
│     └─── /* ──────→ Frontend (:3002) or App         │
│                                                      │
│   Exposed URL: https://4000-{sandboxId}.e2b.dev     │
└─────────────────────────────────────────────────────┘
```

**Key Ports:**
- **4000**: Caddy reverse proxy (exposed to users) - ALWAYS the entry point
- **3001**: Backend server (internal, split mode only)
- **3002**: Frontend server (internal) or unified app

**Why Caddy?**
1. Solves CORS by putting frontend + backend behind a single origin
2. Strips X-Frame-Options headers to allow iframe embedding
3. Used for BOTH split and unified deployments

---

## Deployment Modes

### Split Mode (frontend/ + backend/ directories)
- Frontend runs on internal port 3002
- Backend runs on internal port 3001
- Caddy on port 4000 proxies to both
- **Detection requires:** `frontend/package.json` AND `backend/package.json` (or equivalent runtime files)

### Unified Mode (single app at root)
- App runs on internal port 3002
- Caddy on port 4000 proxies to it
- Used for: Next.js, single Express apps, static sites, etc.

**IMPORTANT:** Empty `frontend/` or `backend/` directories (e.g., containing only `e2b.env`) do NOT trigger split mode. The directories must contain `package.json`, `requirements.txt`, `go.mod`, or similar runtime files.

---

## The .preview-config.json File

This file controls how your project is deployed. It's auto-generated but CAN be manually edited.

### Location
```
project/
└── .preview-config.json
```

### Forcing Regeneration
Delete `.preview-config.json` to force the tool to re-analyze your project.

### Example: Unified Mode (Next.js, single apps)
```json
{
  "projectId": "your-project-id",
  "framework": "next",
  "deploymentMode": "unified",
  "buildStrategy": "production",
  "unified": {
    "workingDirectory": ".",
    "installCommand": "npm install --legacy-peer-deps --include=dev",
    "buildCommand": "npm run build",
    "startCommand": "npm start",
    "port": 3001,
    "env": {}
  }
}
```

### Example: Split Mode (frontend + backend)
```json
{
  "projectId": "your-project-id",
  "framework": "vite",
  "deploymentMode": "split",
  "buildStrategy": "production",
  "frontend": {
    "workingDirectory": "frontend",
    "installCommand": "npm install --legacy-peer-deps --include=dev",
    "buildCommand": "npm run build",
    "startCommand": "npx serve dist -l 3002",
    "port": 3002,
    "env": { "VITE_API_URL": "" }
  },
  "backend": {
    "workingDirectory": "backend",
    "installCommand": "npm install --legacy-peer-deps --include=dev",
    "buildCommand": "npm run build",
    "startCommand": "npm start",
    "port": 3001,
    "env": { "CORS_ORIGIN": "*" },
    "healthEndpoint": "/health"
  }
}
```

### Common Config Fixes

| Problem | Fix |
|---------|-----|
| Wrong deployment mode detected | Change `deploymentMode` to `"unified"` or `"split"` |
| App at root detected as split | Remove `frontend`/`backend` sections, add `unified` section |
| Wrong working directory | Update `workingDirectory` to correct path |
| Missing build step | Add `buildCommand` |
| Wrong port | Update `port` and ensure `startCommand` uses same port |

---

## Health Check Behavior

The health check determines if your app started successfully.

### Port Selection (Automatic)
1. Tool first checks if Caddy is responding on port 4000
2. If yes → health check uses port 4000
3. If no → falls back to the port in your config

### Endpoints Checked
The tool checks these endpoints in order:
- `/health`
- `/api/health`
- `/`

**Your app MUST respond with HTTP 200 on one of these.**

### Health Check Logs
You'll see in deploy logs:
```
Running health check on port 4000...
Health check attempt 1/30...
Health check passed - server is healthy on port 4000
```

---

## Supported Technologies

| Runtime | Detection Files | Frameworks |
|---------|-----------------|------------|
| **Node.js** | package.json | Vite, Next.js, CRA, Express, Fastify, NestJS |
| **Python** | requirements.txt, pyproject.toml | FastAPI, Flask, Django |
| **Go** | go.mod | Gin, Echo, Fiber |
| **Ruby** | Gemfile | Rails, Sinatra |
| **Java** | pom.xml, build.gradle | Spring Boot |
| **Rust** | Cargo.toml | Actix, Rocket, Axum |
| **PHP** | composer.json | Laravel, Symfony |
| **.NET** | *.csproj, *.sln | ASP.NET Core |
| **Static** | index.html (no package.json) | Plain HTML/CSS/JS |

---

## Framework-Specific Guidance

### Next.js

Next.js apps should use **unified mode** at the root:

```json
{
  "deploymentMode": "unified",
  "unified": {
    "workingDirectory": ".",
    "installCommand": "npm install --legacy-peer-deps --include=dev",
    "buildCommand": "npm run build",
    "startCommand": "npm start",
    "port": 3001
  }
}
```

**package.json scripts:**
```json
{
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001"
  }
}
```

**Health endpoint** (create `src/app/api/health/route.ts`):
```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
```

### Vite (React/Vue/Svelte)

For production builds, the tool uses `npx serve dist` instead of Vite's dev server to avoid host validation issues.

**vite.config.ts** (for dev mode fallback):
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3002,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3002
  }
})
```

### Express/Node.js Backend

```javascript
const PORT = process.env.PORT || 3001;

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## Universal Requirements

### 1. Health Endpoint
Your backend/app MUST have a health endpoint returning HTTP 200.

### 2. Configurable Port
Read port from `PORT` environment variable:
```javascript
const PORT = process.env.PORT || 3001;
```

### 3. Bind to 0.0.0.0
Servers MUST bind to `0.0.0.0`, not `localhost`:
```javascript
app.listen(PORT, '0.0.0.0');
```

### 4. Relative API URLs (Frontend)
Use relative URLs for API calls:
```javascript
// GOOD - works with Caddy proxy
fetch('/api/todos')

// BAD - hardcoded localhost
fetch('http://localhost:3001/api/todos')
```

### 5. Database Auto-Creation
Database files are NOT uploaded. Use auto-create patterns:
```sql
CREATE TABLE IF NOT EXISTS ...
```

---

## Environment Variables (e2b.env)

### Template Variables

| Variable | Replaced With | Example |
|----------|---------------|---------|
| `{{PREVIEW_URL}}` | Main Caddy URL (port 4000) | `https://4000-abc123.e2b.dev` |
| `{{BACKEND_URL}}` | Direct backend URL | `https://3001-abc123.e2b.dev` |
| `{{FRONTEND_URL}}` | Direct frontend URL | `https://3002-abc123.e2b.dev` |
| `{{SANDBOX_ID}}` | Sandbox ID | `abc123` |
| `{{GENERATE_SECRET}}` | Random 32-char hex | `a1b2c3d4e5f6...` |

### Example backend/e2b.env
```env
NODE_ENV=development
PORT=3001
CORS_ORIGIN={{PREVIEW_URL}}
JWT_SECRET={{GENERATE_SECRET}}
DATABASE_URL=file:./preview.db
```

---

## Common Errors & Fixes

### "Health check failed" / "Backend not responding"

**Causes & Fixes:**
1. **No health endpoint** → Add `/health` or `/api/health` route returning 200
2. **Wrong port** → Ensure app reads `PORT` env var and binds to it
3. **Binding to localhost** → Change to `0.0.0.0`
4. **App crashed on startup** → Check logs for errors

### "Incorrectly detected as split/unified"

**Cause:** Empty `frontend/` or `backend/` directories exist

**Fix:**
1. Delete `.preview-config.json`
2. Remove empty directories, OR
3. Manually edit `.preview-config.json` to correct `deploymentMode`

### "Install failed"

**Cause:** Missing/invalid dependency file in the `workingDirectory`

**Fix:** Check that `package.json` (or equivalent) exists in the directory specified by `workingDirectory` in config

### "Build failed"

**Cause:** Compilation errors

**Fix:** Address specific errors in build output. Common issues:
- Missing dependencies (add to package.json)
- TypeScript errors
- Missing environment variables at build time

### "CORS error" / "502 Bad Gateway"

**Causes:**
1. Frontend using absolute URLs → Use relative URLs (`/api/...`)
2. Backend crashed → Check backend logs
3. Backend on wrong port → Verify port configuration

### "Caddy failed to start"

**Cause:** Usually internal tool issue

**Workaround:** Tool will fall back to checking the config port directly

---

## Troubleshooting Checklist

Before deploying, verify:

- [ ] Health endpoint exists and returns HTTP 200
- [ ] App reads port from `PORT` env var
- [ ] App binds to `0.0.0.0` (not localhost)
- [ ] Frontend uses relative URLs (`/api/...`)
- [ ] `.preview-config.json` has correct `deploymentMode`
- [ ] `workingDirectory` points to correct location
- [ ] For split mode: both `frontend/` and `backend/` have `package.json`
- [ ] Database uses auto-create patterns

---

## When To Escalate

Report as a TOOL BUG if:
1. User's code follows all patterns correctly
2. `.preview-config.json` is correctly configured
3. Same code works locally but fails in preview
4. Error is in tool infrastructure, not user code

**Escalation format:**
```
TOOL BUG REPORT:
- Project ID: xxx
- Runtime: [Node/Python/Go/etc.]
- Deployment Mode: [unified/split]
- Error: [exact message]
- Config correct: YES
- Code follows patterns: YES
- Attempted fixes: [list]
```

---

*Last updated: 2026-01-20*
