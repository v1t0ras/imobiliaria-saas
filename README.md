# Imobiliaria SaaS

Monorepo em construção para um SaaS imobiliário com frontends públicos separados por cliente, API central, PostgreSQL e storage local de mídias.

## Apps

- `apps/petrus-web`: site público da Petrus.
- `apps/admin-web`: área administrativa compartilhada.
- `apps/api`: API central.

## Packages

- `packages/contracts`: tipos compartilhados.
- `packages/ui`: utilitários e componentes compartilhados.

## Deploy em VPS

Pré-requisitos:
- Docker e Docker Compose instalados no servidor
- Porta 80 e 443 liberadas no firewall do VPS
- DNS do domínio apontando para o IP da VPS

Sequência mínima:

```bash
git clone <repo-url> imobiliaria-saas
cd imobiliaria-saas
cp .env.example .env
# edite o arquivo .env com seus valores reais
bash scripts/deploy.sh
```

Validação depois do deploy:

```bash
docker compose ps
docker compose logs -f api
curl http://localhost/api/health
```

Observações importantes:
- O `docker-compose.yml` expõe apenas o `nginx` para fora; `api` e `petrus-web` ficam na rede interna.
- A imagem do `apps/api` usa uma base Debian-slim para garantir compatibilidade com as bibliotecas nativas do Prisma (OpenSSL).
- O `scripts/deploy.sh` cria `.env` a partir de `.env.example` se ele ainda não existir.
- Para produção, gere migrations em desenvolvimento e use `prisma migrate deploy` no VPS.

## Próximo passo

Ligar o app da Petrus ao backend real com dados da API, autenticação multi-tenant e cobrança recorrente.
