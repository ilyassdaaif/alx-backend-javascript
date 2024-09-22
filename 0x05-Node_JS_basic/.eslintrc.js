{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "no-console": "off",
    "no-shadow": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-param-reassign": ["error", { "props": false }]
  }
}
