#!/usr/bin/env bash
set -euo pipefail

DB_HOST=${DATABASE_HOST:-postgres}
DB_PORT=${DATABASE_PORT:-5432}

echo "Waiting for database $DB_HOST:$DB_PORT..."
# wait for db to accept connections
while ! nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 1
done

echo "Database is available. Running Prisma migrations (deploy)..."
# Try migrate deploy, fallback to db push if migrations not present
if npx prisma migrate deploy; then
  echo "Migrations applied"
else
  echo "No migrations to deploy or migrate failed; running prisma db push"
  npx prisma db push
fi

# Optional seed if environment variable set
if [ "${SEED_ON_START:-false}" = "true" ]; then
  echo "Running seed script"
  node dist/seed.js || true
fi

# Exec the original command
exec "$@"
