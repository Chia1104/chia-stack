# Turbo Apps

A starter monorepo built with Turborepo, Nextjs, Vite, Docker, Typescript, Vitest and Tailwind.

## What's included

This turborepo uses pnpm as a package manager. It includes the following packages:

### Packages

- `@acme/ui`: A UI library built with React, Typescript, Tailwind and Vitest.
- `@acme/ui-utils`: A utility library built with Typescript and React.
- `@acme/utils`: A utility library built with Typescript.
- `@acme/tailwind-config`: A Tailwind config library.

### Apps

- `next-app` - A Nextjs app built with Typescript, Tailwind and Vitest.
- `react-app` - A React app built with Typescript, Tailwind and Vitest.

## Getting started

### Install dependencies

```bash
pnpm i
```

### Run the app

```bash
pnpm dev --filter <APP_NAME>...
```

### Build the app

```bash
pnpm build --filter <APP_NAME>...
```

## Continuous Integration

### Test, Lint and Typecheck

```bash
pnpm test lint type:check
```

### Check package versions

The repo uses [manypkg](https://github.com/Thinkmill/manypkg)

#### `manypkg check`

`manypkg check` runs all of the checks against your repo, logs any errors and exits with a code

#### `manypkg fix`

`manypkg fix` runs all of the checks against your repo and fixes any of problems that can be fixed.

```bash
pnpm manypkg check

# or

pnpm manypkg fix
```
