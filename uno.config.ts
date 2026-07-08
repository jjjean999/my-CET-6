import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn-macaron', 'px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'],
    ['card-macaron', 'bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700'],
  ],
  theme: {
    colors: {
      // 主色 — 柔和蓝（马卡龙蓝），低饱和不扎眼
      primary: {
        50: '#f4f9fc',
        100: '#e3f1f7',
        200: '#c7e3ef',
        300: '#a0d0e3',
        400: '#7eb8da',
        500: '#5da3cc',
        600: '#4a8ab5',
        700: '#3d7299',
        800: '#355e7d',
        900: '#304f68',
      },
      // 马卡龙辅助色（低饱和，用于点缀）
      macaron: {
        mint:   '#A8D8B9',
        coral:  '#F8B595',
        purple: '#C3AED6',
        yellow: '#F5E6A3',
        pink:   '#F5B7B1',
        cyan:   '#AED9E0',
        orange: '#F0C27F',
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    transitionProperty: {
      width: 'width',
    },
    textDecoration: ['active'],
    minWidth: {
      kanban: '28rem',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        simpleIcons: () => import('@iconify-json/simple-icons/icons.json').then(i => i.default),
        ph: () => import('@iconify-json/ph/icons.json').then(i => i.default),
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        Charmonman: 'Charmonman',
      },
    }),
  ],
})
