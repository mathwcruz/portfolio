import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      "quotes": "off",
      "no-useless-escape": "off",
    },
  },
];

export default eslintConfig;
