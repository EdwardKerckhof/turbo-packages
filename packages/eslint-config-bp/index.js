module.exports = {
  env: {
    node: true,
  },
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:markdown/recommended',
    'plugin:json/recommended-with-comments',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'turbo',
    'prettier',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'import'],
  ignorePatterns: [
    '.eslintrc.js',
    'dist',
    '**/*.js',
    'test',
    'node_modules',
    '.turbo',
    'public',
    'coverage',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/no-unresolved': 'error',
    'turbo/no-undeclared-env-vars': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
  },
};
