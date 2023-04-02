FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add turbo && \
    turbo prune --scope=web --docker

FROM node:18-alpine AS installer

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

ARG TURBO_TEAM \
    TURBO_TOKEN
ENV TURBO_TEAM=$TURBO_TEAM \
    TURBO_TOKEN=$TURBO_TOKEN

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add pnpm && \
    pnpm i && \
    yarn turbo run build --filter=web...

FROM node:18-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=installer /app/apps/web/next.config.mjs .
COPY --from=installer /app/apps/web/package.json .
COPY --from=installer /app/apps/web/public ./apps/web/public

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 8080

ENV PORT 8080

CMD node apps/web/server.js
