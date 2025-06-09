// import js from '@eslint/js';
// import globals from 'globals';
// import pluginReact from 'eslint-plugin-react';
// import { defineConfig } from 'eslint/config';
// import prettier from 'eslint-config-prettier';
// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,jsx}'],
//     plugins: { js },
//     languageOptions: {
//       globals: globals.browser,
//     },
//     rules: {
//       // you can add your custom JS rules here
//       'no-console': 'warn',
//       'no-unused-vars': [
//         'error',
//         { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
//       ],
//       eqeqeq: ['error', 'always'],
//       'react/prop-types': 'off', // If you're not using PropTypes
//       'react/react-in-jsx-scope': 'off', // Only if using React 17+
//     },
//   },
//   {
//     files: ['**/*.{jsx,js}'],
//     plugins: {
//       react: pluginReact,
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     ...pluginReact.configs.flat.recommended,
//   },
//   {
//     // ✅ Apply Prettier last to override formatting rules
//     files: ['**/*.{js,jsx}'],
//     name: 'prettier-config',
//     extends: [prettier],
//   },
// ]);
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly", // ✅ Tells ESLint to allow use of console
      },
    },
    
    rules: {
      // ✅ Syntax and Safety
      "no-var": "error",
      "prefer-const": "error",
      "quotes": ["error", "double"],
      "no-unused-vars": ["error", {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      }],
      "no-undef": "error",
      "no-eval": "error",
      "no-alert": "warn",

      // ✅ Best Practices
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-console": "off", // ✅ allow console.log
      "consistent-return": "error",

      // ✅ Code Style
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "key-spacing": ["error", {
        beforeColon: false,
        afterColon: true,
      }],
      "comma-spacing": ["error", {
        before: false,
        after: true,
      }],

      // ✅ Clean Code
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],

      // ✅ Optional Complexity
      "complexity": ["warn", 10],
      "max-lines": ["warn", 300],
      "max-depth": ["warn", 4],
    },
  },
];