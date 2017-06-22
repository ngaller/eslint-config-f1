module.exports = {
  "ecmaFeatures": {
    "modules": true
  },
  "plugins": [
  ],
  "rules": {
    "no-trailing-spaces": "off",
    "eol-last": "off",
    "no-labels": 0,
    "arrow-parens": 0,
    "comma-dangle": 0,
    "curly": 0,
    "space-before-function-paren": ["error", {
      "anonymous": "ignore",
      "named": "never",
      "asyncArrow": "ignore"
    }],
    "keyword-spacing": 0,
    "no-unused-expressions": 0,
    "one-var": 0
  },
  "extends": "standard",
  "parser": "babel-eslint"
}
