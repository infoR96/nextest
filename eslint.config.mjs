import { ESLint } from "eslint";

export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    // Define tus globales aquí, por ejemplo:
    // myGlobalVar: "readonly"
  },
  rules: {
    // Personaliza tus reglas aquí
  }
};