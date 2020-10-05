module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'template-curly-spacing': 'off',
      indent: 'off',
      semi: ['error', 'never'],
      'global-require': 'off',
      'max-len': 'off',
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'jsx-a11y/anchor-is-valid': 0,
      camelcase: 0,
    },
  }
  