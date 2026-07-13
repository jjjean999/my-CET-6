<script setup lang="ts" generic="T extends any, O extends any">
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'IndexPage',
})

const menus = reactive([
  {
    label: '词汇',
    icon: 'i-carbon-chart-histogram',
    link: '/vocabulary',
    desc: 'CET-6 核心词汇表，50 章 1500+ 词，支持发音、默写与错词复习',
    color: 'macaron-mint',
  },
  {
    label: '听力',
    icon: 'i-carbon-headphones',
    link: '/listening',
    desc: '听力考试全解析，题型拆解、答题技巧与时间分配策略',
    color: 'macaron-purple',
  },
  {
    label: '阅读',
    icon: 'i-carbon-white-paper',
    link: '/reading',
    desc: '选词填空、长篇匹配、仔细阅读三大题型的解题策略',
    color: 'macaron-yellow',
  },
  {
    label: '写作',
    icon: 'i-carbon-edit',
    link: '/writing',
    desc: '短文写作（命题/看图/情景）评分标准与练习方法',
    color: 'macaron-pink',
  },
  {
    label: '翻译',
    icon: 'i-carbon-translate',
    link: '/translation',
    desc: '2020-2025 年汉译英真题汇编，覆盖六大主题分类',
    color: 'macaron-cyan',
  },
  {
    label: '单词练习',
    icon: 'i-carbon-keyboard',
    link: '/vocabulary/typing',
    desc: '听音打字练习，逐词比对拼写，实时统计准确率与速度',
    color: 'macaron-mint',
  },
])

// 马卡龙颜色映射
const macaronColors: Record<string, string> = {
  'macaron-mint': '#A8D8B9',
  'macaron-coral': '#F8B595',
  'macaron-purple': '#C3AED6',
  'macaron-yellow': '#F5E6A3',
  'macaron-pink': '#F5B7B1',
  'macaron-cyan': '#AED9E0',
  'macaron-orange': '#F0C27F',
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <section class="mb-4 rounded-2xl border border-[#e8e0d5] bg-white p-4 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 sm:py-16">
        <h1 style="font-family: Charmonman;" class="mb-8 text-center text-6xl text-gray-800 dark:text-white">
          <span class="font-bold" style="color: #4a8ab5;">CET-6 Center</span>
        </h1>
        <div class="mb-8 max-w-screen-md lg:mb-16">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
            我的 CET-6 备考中心
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            备考 CET-6，只需要这个小站和一只烂笔头<br>从词汇开始，稳扎稳打，一次通过 🌟
          </p>
        </div>
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
          <RouterLink
            v-for="m in menus"
            :key="m.label"
            :to="m.link"
            class="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="mb-4 h-11 w-11 flex items-center justify-center rounded-xl lg:h-12 lg:w-12 transition-colors duration-300"
                 :style="{ backgroundColor: macaronColors[m.color] + '30' }">
              <i class="block h-5 w-5 lg:h-6 lg:w-6" :class="m.icon" :style="{ color: macaronColors[m.color] }" />
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-primary-600">
              {{ m.label }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ m.desc }}
            </p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
