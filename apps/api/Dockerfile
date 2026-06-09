# Build stage
FROM node:20-bullseye-slim AS builder
WORKDIR /app
COPY apps/api/package.json apps/api/package-lock.json* ./
COPY apps/api/tsconfig.json ./
COPY prisma ./prisma
RUN npm install --silent
COPY apps/api .
RUN npm run prisma:generate
RUN npm run build

# Run stage
FROM node:20-bullseye-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
# install tools for entrypoint (nc)
RUN apt-get update && apt-get install -y --no-install-recommends netcat && rm -rf /var/lib/apt/lists/*
# copy entrypoint
COPY apps/api/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh
# storage volume is mounted by docker-compose
VOLUME ["/app/storage/properties"]
EXPOSE 4000
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node","dist/server.js"]
