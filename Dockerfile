# ========================================
# Stage 1: Builder/Dependencies
# ========================================
FROM --platform=linux/amd64 node:16.15.1-slim AS builder

WORKDIR /home/node/esx

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run test

# ========================================
# Stage 2: Production Runtime
# ========================================
FROM --platform=linux/amd64 node:16.15.1-slim

WORKDIR /home/node/esx
ENV NODE_ENV=production

COPY --from=builder /home/node/esx/node_modules ./node_modules
COPY --from=builder /home/node/esx/src ./src
COPY --from=builder /home/node/esx/package*.json ./
COPY --from=builder /home/node/esx/tsconfig.json ./
COPY --from=builder /home/node/esx/ormconfig.* ./
COPY --from=builder /home/node/esx/public ./public

# Criar usuário não-root por segurança
RUN useradd -m -u 1001 appuser && chown -R appuser:appuser /home/node/esx
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3333', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Expor porta
EXPOSE 3333

# Comando de inicialização
CMD ["npm", "run", "start"]
