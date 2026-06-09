#!/usr/bin/env bash
set -euo pipefail

DB_HOST=${DATABASE_HOST:-postgres}
DB_PORT=${DATABASE_PORT:-5432}

echo "Waiting for database $DB_HOST:$DB_PORT..."
# wait for db to accept connections
while ! nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 1
done

if [ -d prisma/migrations ] && find prisma/migrations -mindepth 1 -maxdepth 1 | read -r _; then
  echo "Database is available. Running Prisma migrations (deploy)..."
  npx prisma migrate deploy
  echo "Migrations applied"
else
  echo "No Prisma migrations found. Syncing schema with prisma db push..."
  npx prisma db push
  echo "Schema pushed"
fi

# Optional seed if environment variable set
if [ "${SEED_ON_START:-false}" = "true" ]; then
  echo "Running seed script"
  node dist/seed.js || true
fi

# Exec the original command
exec "$@"
