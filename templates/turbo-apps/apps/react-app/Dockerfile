ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS base

FROM base AS pre-builder

WORKDIR /app
COPY . .

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add turbo && \
    turbo prune --scope=react-app --docker

FROM base AS builder

WORKDIR /app

COPY --from=pre-builder /app/out/json/ .
COPY --from=pre-builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pre-builder /app/out/full/ .
COPY turbo.json turbo.json

ARG TURBO_TEAM \
    TURBO_TOKEN \
    VITE_ENV_EXAMPLE

ENV TURBO_TEAM=${TURBO_TEAM} \
    TURBO_TOKEN=${TURBO_TOKEN} \
    VITE_ENV_EXAMPLE=${VITE_ENV_EXAMPLE}

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    corepack enable && \
    pnpm i && \
    pnpm turbo run build --filter=react-app...

FROM nginx:alpine

COPY apps/react-app/docker/nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=builder /app/apps/react-app/dist /usr/share/nginx/html

ENV NODE_ENV=production \
    PORT=8080 \
    HOST=0.0.0.0

EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
