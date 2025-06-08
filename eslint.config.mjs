import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_", // Ignore arguments that start with _
          varsIgnorePattern: "^_", // Ignore variables that start with _
          caughtErrorsIgnorePattern: "^_", // Ignore caught error variables that start with _
        },
      ],
    },
  },
];

export default eslintConfig;
