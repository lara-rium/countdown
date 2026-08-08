import { defineConfig } from "html-validate";
import plugin from "@fulldecent/nice-checkers-plugin";

export default defineConfig({
  elements: ["html5"],
  extends: [
    "html-validate:recommended",
    "html-validate:document",
    "nice-checkers-plugin:recommended",
  ],
  plugins: [plugin],
  rules: {
    "allowed-links": [
      "warn",
      {
        allowAbsolute: false,
        allowBase: true,
        allowExternal: true,
        allowRelative: true,
      },
    ],
    "attr-pattern": "warn",
    "class-pattern": "warn",
    "deprecated-class": "warn",
    "doctype-style": "off",
    "id-pattern": "warn",
    "name-pattern": "warn",
    "no-style-tag": "warn",
    "no-unknown-attributes": "warn",
    "no-unknown-elements": "warn",
    "require-csp-nonce": "warn",
    "require-sri": "off",
    "svg-focusable": "warn",
    "void-style": [
      "warn",
      {
        style: "selfclosing",
      },
    ],
  },
  transform: {
    "^.*\\.md$": "html-validate-markdown",
  },
});
