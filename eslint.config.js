// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'   // ⬅️ AJOUT

export default [
  { ignores: ['dist/**', 'node_modules/**'] },

  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
  },

  js.configs.recommended,
  ...vue.configs['flat/essential'],
  ...tseslint.configs.recommended,

  // ⬇️ Important: forcer le parser Vue sur les .vue
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser, // ⬅️ le parser qui comprend le template <template>...</template>
      parserOptions: {
        parser: tseslint.parser, // ⬅️ et TS pour le <script lang="ts">
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
