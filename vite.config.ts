/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'

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
    VueMacros({
      // 关闭这两个宏：它们用 Babel 解析 .vue 的 script 块，
      // 无法识别 lang="ts" 下的 import type 语法，导致 build 失败。
      // propsDestructure 已由 @vitejs/plugin-vue 原生支持，无需 betterDefine。
      betterDefine: false,
      jsxDirective: false,
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
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

  // Fix ERR_REQUIRE_ESM for unconfig / vue-macros compatibility
  optimizeDeps: {
    include: ['unconfig', 'unplugin-vue-macros', 'unplugin-combine'],
    // oxc-resolver（被 @vue-macros/api 间接依赖）的 browser 入口需要 wasm 绑定，
    // 该绑定不会在浏览器运行时真正执行，标记为 external 避免预构建失败导致 dev server 崩溃。
    esbuildOptions: {
      external: ['@oxc-resolver/binding-wasm32-wasi'],
    },
  },
  ssr: {
    noExternal: ['unconfig', 'unplugin-vue-macros', 'unplugin-combine'],
  },
})
