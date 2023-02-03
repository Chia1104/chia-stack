# NestJS with GraphQL(code first) and Prisma

A simple example of how to use NestJS with GraphQL and Prisma.

## Development

You need to connect to a database.

Generate the `.env` file:

```bash
cp .env.example .env
```

Run `pnpm install` to install the dependencies and generate the Prisma client.

You can run `pnpm start:dev` to start the development server.

And go to `http://localhost:3001/graphql` to play with the GraphQL API.
