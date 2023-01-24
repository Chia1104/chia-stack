module.exports = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next",
    "turbo",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "warn",
  },
};
