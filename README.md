# Detektr Platform (Monorepo)

A cloud-based browser and malware sandbox platform for testing suspicious files and URLs in a secure, isolated environment.

## Structure
- `frontend/` — Vite + React UI
- `backend/` — FastAPI + PostgreSQL + Redis
- `sandbox/` — noVNC / CAPEv2 / Docker configs
- `docs/`, `infra/`, `docker/` — infra and project resources

## Modules
- Remote browser sandbox (via noVNC + Chromium + Docker)
- File upload and malware analysis (CAPEv2 integration)
- Stripe-powered Free & Pro tiered access

## Tech Stack
- React + Tailwind CSS (frontend)
- FastAPI + PostgreSQL + Redis (backend)
- Docker (sandbox environments)
