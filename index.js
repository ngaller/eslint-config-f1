module.exports = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
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
  "env": {
    "browser": true
  },
  "extends": "standard",
  "parser": "babel-eslint"
}