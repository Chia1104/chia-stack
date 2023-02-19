FROM node:18-alpine AS install
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN apk add --no-cache libc6-compat && \
    yarn global add pnpm && \
    pnpm install

FROM node:18-alpine AS build
WORKDIR /app

COPY --from=install /app/node_modules ./node_modules
COPY . .

RUN yarn prisma generate && \
    yarn build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY schema.gql ./schema.gql

ARG DATABASE_URL

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=8080 \
    DATABASE_URL=postgres://root:Jg780F639hwd@infra.zeabur.com:31972/root

EXPOSE 8080

CMD ["node", "dist/main.js"]
