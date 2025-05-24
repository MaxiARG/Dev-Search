// module.exports = {
//     root: true,
//     extends: [
//       'eslint:recommended',
//       'plugin:prettier/recommended'
//     ],
//     plugins: ['prettier'],
//     rules: {
//       'prettier/prettier': ['error'],
//     },
//     env: {
//       node: true,
//       es6: true,
//     },
//     parserOptions: {
//       ecmaVersion: 2021,
//       sourceType: 'module',
//     },
//   }
  module.exports = {
    root: true,
    env: { node: true, es6: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  }