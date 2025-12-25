# DevOps Playground

This project demonstrates a production-line DevOps setup for a backend server

The goal of the project is to whow how to:

- containerize services
- isolate backend access
- configure reverse proxy
- enable HTTPS adn basic security hardening
- automate cjecks with CI

## Architecture

Client
↓
Nginx (80/443, HTTPS, security headers)
↓
Backend (Node.js, internal network)
↓
PostgreSQL (persistent volume)

## Tech Stack

- **Backend:** Node.js (Express)
- **Database:** PostgreSQL
- **Reverse Proxy:** Nginx
- **Containers:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Security:** HTTPS, HSTS, CSP, security headers
- **OS:** Linux containers (via Docker)

## Features

- Backend service with `/health` endpoint
- PostgreSQL connection check in health endpoint
- Dockerize services with docker-compose
- Presistent database storage via Docker volumes
- Nginx reverse proxy (backend not exposed publicly)
- HTTPS with self-signed certificates (local)
- Securiry headers (X-Frame-Option, CSP, HSTS, etc.)
- CI pipeline with Docker Compose and smoke tests

## Healthcheck

The `/health` endpoint checks:

- backend availability
- database connectivity

Example response:

```json
{
    "status": "ok",
    "db": "connected"
}