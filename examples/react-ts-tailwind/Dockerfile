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
    VITE_ENV_EXAMPLE
ENV \
    VITE_ENV_EXAMPLE=${VITE_ENV_EXAMPLE}

RUN yarn build

FROM nginx:alpine

COPY /docker/nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=builder /app/dist /usr/share/nginx/html

ENV \
    NODE_ENV=production \
    PORT=8080 \
    HOST=0.0.0.0

EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
