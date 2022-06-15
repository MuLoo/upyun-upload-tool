module.exports = {
  // 0 turn off 1 turn on and warn 2 turn on and error
  'env': {                           // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true,                 // browser global variables
    'node': true,                    // Node.js global variables and Node.js-specific rules
    'es6': true,
    'serviceworker': true
  },
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  },
  'globals': {
    '__PUBLIC__': true,
  },
  'rules': {
    /**
     * Strict mode
     */
    'strict': [2, 'never'],          // http://eslint.org/docs/rules/strict
    /**
     * ES6
     */
    'no-var': 0,                     // http://eslint.org/docs/rules/no-var
    //    "prefer-const": 2,               // http://eslint.org/docs/rules/prefer-const

    /**
     * Variables
     */
    'no-undef': 2,
    'no-shadow': 0,                  // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-unused-vars': [2, {          // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'local',
      'args': 'after-used'
    }],
    'no-use-before-define': 0,       // http://eslint.org/docs/rules/no-use-before-defin
  }
};
