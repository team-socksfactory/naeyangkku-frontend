module.exports = {
  // ESLint를 비활성화
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    eqeqeq: 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
