FROM node:20-alpine AS builder
WORKDIR /app
COPY apps/petrus-web/package.json apps/petrus-web/pnpm-lock.yaml* ./
RUN npm install
COPY apps/petrus-web .
COPY tsconfig.base.json /tsconfig.base.json
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
# Copia apenas o necessário para rodar em produção
COPY --from=builder /app/ .
EXPOSE 3000
CMD ["npm","run","start"]
