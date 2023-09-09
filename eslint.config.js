import base from "@shun-shobon/eslint-config-base/flat";

export default [
  ...base,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
  },
  {
    ignores: ["dist/"],
  },
];
