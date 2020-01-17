module.exports = {
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',

    // Reglas personalizadas
    'require-await': 'error',
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    node: true,
    es6: true,
  },
};
