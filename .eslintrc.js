module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  "extends": "standard",
  "plugins": [
    "html"
  ],
  "globals": {
    "$": true,
    "session_storage": true                           //session_storage
  },
  // add your custom rules here
  "rules": {
    "no-new":0,
    "no-unused-vars": ["error", {"args": "none" }],
    "eqeqeq":0,//设置为0，代表 == 也可以不必要非得 ===
    "quotes":0,
    "no-extra-boolean-cast":0,
    "space-infix-ops":0,
    "handle-callback-err": 0,
    "new-cap": 0,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    // allow paren-less arrow functions
    "arrow-parens": 0,
    "properties": 0,
    "camelcase":0,//不必要非得用骆驼拼接法
    // allow async-await
    "enerator-star-spacing": 0,
    // "react/jsx-uses-react": "error",
    // "react/jsx-uses-vars": "error",
    // allow debugger during development
    "no-debugger": 0

  }
}
