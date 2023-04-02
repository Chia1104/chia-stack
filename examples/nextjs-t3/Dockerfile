FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN apk add --no-cache libc6-compat && \
    yarn global add pnpm && \
    pnpm i

FROM node:18-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG \
    DATABASE_URL \
    BASE_URL
ENV \
    DATABASE_URL=${DATABASE_URL} \
    BASE_URL=${BASE_URL} \
    SKIP_ENV_VALIDATION=true

RUN yarn prisma generate && \
    yarn build

FROM node:18-alpine AS runner

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

ARG \
    DATABASE_URL \
    NEXTAUTH_URL \
    NEXTAUTH_SECRET \
    GOOGLE_CLIENT_ID \
    GOOGLE_CLIENT_SECRET \
    BASE_URL
ENV \
    DATABASE_URL=${DATABASE_URL} \
    NEXTAUTH_URL=${NEXTAUTH_URL} \
    NEXTAUTH_SECRET=${NEXTAUTH_SECRET} \
    GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID} \
    GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET} \
    BASE_URL=${BASE_URL} \
    NODE_ENV=production \
    PORT=8080

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]
