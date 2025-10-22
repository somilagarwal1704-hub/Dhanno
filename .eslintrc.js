module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: ["react", "react-native", "no-text-outside-text"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "no-text-outside-text/no-text-outside-text": "error",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "no-text-outside-text/no-text-outside-text": "error",
      },
    },
  ],
};
