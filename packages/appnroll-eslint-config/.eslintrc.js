module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "../../tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "testing-library",
    "jest-dom",
    "react",
    "react-hooks",
  ],
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/jsx-boolean-value": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
