module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    root: true,
    rules: {
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "require-jsdoc": 0,
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": "off",
        "space-in-parens": ["error", "never"],
        "@typescript-eslint/no-var-requires": 0,
    },
};
