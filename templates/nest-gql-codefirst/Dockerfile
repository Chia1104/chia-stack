ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS base

FROM base AS installer

WORKDIR /app
COPY . .

ARG TURBO_TEAM \
    TURBO_TOKEN \
    DATABASE_URL

ENV TURBO_TEAM=$TURBO_TEAM \
    TURBO_TOKEN=$TURBO_TOKEN \
    DATABASE_URL=${DATABASE_URL}

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    corepack enable && \
    pnpm i && \
    pnpm prisma generate && \
    pnpm build

FROM base as runner
WORKDIR /app

COPY --from=installer /app/dist/ .

COPY package.json pnpm-lock.yaml prisma ./

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    corepack enable && \
    pnpm i --prod --ignore-scripts && \
    pnpm prisma generate

ARG DATABASE_URL

ENV NODE_ENV=production \
    PORT=8080 \
    DATABASE_URL=${DATABASE_URL}

EXPOSE 8080

CMD [ "node", "main.js" ]
