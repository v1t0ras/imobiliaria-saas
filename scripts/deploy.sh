#!/usr/bin/env bash
set -euo pipefail

if [ ! -f .env ]; then
	if [ -f .env.example ]; then
		cp .env.example .env
		echo "Created .env from .env.example. Review it before production use."
	else
		echo "Missing .env and .env.example"
		exit 1
	fi
fi

echo "Building images..."
docker compose build --pull --no-cache

echo "Starting containers..."
docker compose up -d

echo "Applying migrations (deploy) in api..."
docker compose exec api npx prisma migrate deploy || docker compose exec api npx prisma db push

echo "Running seed..."
docker compose exec api npm run seed || true

echo "Service status..."
docker compose ps

echo "Done."
