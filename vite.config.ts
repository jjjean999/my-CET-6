/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '',
  server: {
    host: '0.0.0.0',
    port: 3333,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // 直接使用 @vitejs/plugin-vue（Vue 3.3+ 原生支持 defineOptions / defineModel /
    // propsDestructure），不再依赖 unplugin-vue-macros。
    // 原 VueMacros 的 betterDefine / jsxDirective 用 babel 解析 .vue 的 script 块，
    // 无法识别 lang="ts" 下的 `import type` 语法，在 CI 构建时会报
    // "Unexpected token, expected from"，故整体移除。
    Vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },

  // oxc-resolver（被部分构建期依赖间接引用）的 browser 入口需要 wasm 绑定，
  // 该绑定不会在浏览器运行时真正执行，标记为 external 避免预构建失败导致 dev server 崩溃。
  optimizeDeps: {
    esbuildOptions: {
      external: ['@oxc-resolver/binding-wasm32-wasi'],
    },
  },
})
