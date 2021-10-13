module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  // https://github.com/yoyoys/eslint-config-vue-typescript-prettier-airbnb/blob/master/index.js
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    parser: '@typescript-eslint/parser',
  },
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  settings: {
    // resolve import/no-unresolved when importing .ts files without writing
    // extension. In general we should not import typescript with extensions
    // https://stackoverflow.com/questions/58159144/vue-sfc-import-typescript-file-throws-an-import-path-cannot-end-with-a-ts-ex
    // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
};
