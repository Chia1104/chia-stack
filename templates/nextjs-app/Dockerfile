ARG NODE_TAG=18-alpine

FROM node:${NODE_TAG} AS base

FROM base AS deps

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN apk add --no-cache libc6-compat &&  \
    corepack enable && \
    pnpm i

FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG VERCEL_URL

ENV VERCEL_URL=${VERCEL_URL}

RUN apk add --no-cache libc6-compat &&  \
    corepack enable && \
    pnpm build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ARG VERCEL_URL

ENV VERCEL_URL=${VERCEL_URL} \
    PORT=8080 \
    NODE_ENV=production

EXPOSE 8080

CMD ["node", "server.js"]
