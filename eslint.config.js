import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
// import pluginRemixConfig from "@remix-run/eslint-config"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginJsxAlly from "eslint-plugin-jsx-a11y"
import pluginImport from "eslint-plugin-import"
//"@remix-run/eslint-config/jest-testing-library",


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // pluginRemixConfig,
  pluginReactHooks,
  pluginJsxAlly,
  pluginImport,
]