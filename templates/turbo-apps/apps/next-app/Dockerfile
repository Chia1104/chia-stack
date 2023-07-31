ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS base

FROM base AS pre-builder

WORKDIR /app
COPY . .

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add turbo && \
    turbo prune --scope=next-app --docker

FROM base AS builder

WORKDIR /app

COPY --from=pre-builder /app/out/json/ .
COPY --from=pre-builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pre-builder /app/out/full/ .
COPY turbo.json turbo.json

ARG TURBO_TEAM \
    TURBO_TOKEN

ENV TURBO_TEAM=${TURBO_TEAM} \
    TURBO_TOKEN=${TURBO_TOKEN}

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    corepack enable && \
    pnpm i && \
    pnpm turbo run build --filter=next-app...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=builder /app/apps/next-app/package.json .
COPY --from=builder /app/apps/next-app/public ./apps/next-app/public

COPY --from=builder --chown=nextjs:nodejs /app/apps/next-app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/next-app/.next/static ./apps/next-app/.next/static

ENV PORT=8080 \
    NODE_ENV=production

EXPOSE 8080

CMD node apps/next-app/server.js