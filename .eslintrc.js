module.exports = {
    "root": true,
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "jquery": false,
        "jest": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "2018"
    },
    "rules": {
        "indent": [
            "off",
            "tab",
            { "SwitchCase": 1 }
        ],
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "off",
            "always"
        ],
        "no-var": [
            "off"
        ],
        "no-console": [
            "off"
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "off"
        ]
    }
};
