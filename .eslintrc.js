module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    
    "extends": "airbnb",
    "settings": {
        "react": {
          "pragma": "React",
          "version": "15.0"
        },
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};