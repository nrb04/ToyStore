module.exports = {
  env: { browser: true, es2020: true, Node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "tailwindcss"],
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
    "react-refresh/only-export-components": "warn",
  },
};
