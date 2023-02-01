# TailwindCSS Configuration

This package contains the TailwindCSS configuration for the [TailwindCSS](https://tailwindcss.com/) framework.

## Development

You can import the configuration in your `tailwind.config.js` by using the following import statement:

```js
const config = require("@chia-stack/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  ...config,
};
```
