FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN yarn global add pnpm && \
    pnpm i

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG \
    VITE_ENV_EXAMPLE
ENV \
    VITE_ENV_EXAMPLE=${VITE_ENV_EXAMPLE}

RUN pnpm build

FROM nginx:alpine
COPY /docker/nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=builder /app/dist /usr/share/nginx/html

ARG \
    VITE_ENV_EXAMPLE
ENV \
    VITE_ENV_EXAMPLE=${VITE_ENV_EXAMPLE} \
    NODE_ENV=production \
    PORT=8080 \
    HOST=0.0.0.0

EXPOSE 8080

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
