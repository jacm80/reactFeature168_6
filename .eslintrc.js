module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'plugins': [
      'react-hooks'
    ],
    'rules': {
      'object-curly-newline': 'off',
      'no-tabs': 'off',
      'max-len': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'no-use-before-define': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    'globals': {
      "fetch": false
    }
  }