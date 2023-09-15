/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: "**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}",
      extends: [
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "prettier/prettier": ["warn"],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "warn",
      },
    },
    // Rules for React files
    {
      files: "**/*.{jsx,tsx}",
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:tailwindcss/recommended",
      ],
      plugins: ["react"],
      rules: {
        "tailwindcss/classnames-order": "off",
        "react/prop-types": "off",
        "react/no-unknown-property": "off",
        "react/self-closing-comp": "error",
        "no-restricted-syntax": [
          "error",
          {
            // ❌ useMemo(…, [])
            selector:
              "CallExpression[callee.name=useMemo][arguments.1.type=ArrayExpression][arguments.1.elements.length=0]",
            message:
              "`useMemo` with an empty dependency array can't provide a stable reference, use `useRef` instead.",
          },
          {
            // ❌ z.object(…)
            selector:
              "MemberExpression[object.name=z] > .property[name=object]",
            message: "Use z.strictObject is more safe.",
          },
        ],
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".tsx", ".jsx"], allow: "as-needed" },
        ],
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-boolean-value": "error",
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
      },
      settings: {
        react: { version: "detect" },
      },
    },
  ],
};
