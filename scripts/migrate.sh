#!/usr/bin/env bash
set -euo pipefail

# Run prisma migrate deploy then seed
cd $(dirname "$0")/..
cd apps/api

if [ -f .env ]; then
  export $(cat .env | sed -e 's/#.*//g' | xargs)
fi

npx prisma generate
npx prisma migrate deploy
node dist/seed.js
