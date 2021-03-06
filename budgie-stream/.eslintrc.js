module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends:  [
    "prettier",
    "prettier/standard",
    "prettier/react",
    "plugin:react/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    'react/prop-types': 1,
      "prettier/prettier": [
        "error",
        {
          "printWidth": 80,
          "trailingComma": "es5",
          "semi": true,
          "jsxSingleQuote": true,
          "singleQuote": true,
          "useTabs": true
        }
      ]
  },
  
};
