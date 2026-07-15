<script setup lang="ts">
import translationData from './translationData.js'

defineOptions({
  name: 'TranslationPage',
})

// 按主题分组
const categories = [...new Set(translationData.map(t => t.category))]
const activeCategory = ref(categories[0])
const filteredData = computed(() =>
  translationData.filter(t => t.category === activeCategory.value),
)

// 每道题的显示状态
const revealedMap = reactive<Record<number, boolean>>({})

function toggleReveal(id: number) {
  revealedMap[id] = !revealedMap[id]
}

function revealAll() {
  filteredData.value.forEach((t) => {
    revealedMap[t.id] = true
  })
}

function hideAll() {
  filteredData.value.forEach((t) => {
    revealedMap[t.id] = false
  })
}

// 各主题颜色映射
const categoryColors: Record<string, string> = {
  '中国文化': '#F8B595',
  '科技发展': '#C3AED6',
  '经济发展': '#F0C27F',
  '社会生活': '#F5B7B1',
  '历史名胜': '#F5E6A3',
  '地理风光': '#AED9E0',
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="mx-auto max-w-screen-xl">
      <!-- 页面标题 -->
      <section class="mb-6 rounded-2xl border border-[#e8e0d5] bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h1 class="mb-2 text-3xl font-bold text-gray-800 dark:text-white">CET-6 翻译练习</h1>
        <p class="text-gray-500">2020-2025年 CET-6 汉译英真题汇编，覆盖文化、科技、经济、社会、地理等多主题。点击"显示答案"查看参考译文。</p>
      </section>

      <!-- 分类 Tab -->
      <div class="mb-6 flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          class="rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200"
          :class="activeCategory === cat
            ? 'border-transparent text-white shadow-sm'
            : 'border-[#e8e0d5] bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'"
          :style="activeCategory === cat
            ? { backgroundColor: categoryColors[cat] || '#7EB8DA' }
            : {}"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- 批量操作 -->
      <div class="mb-4 flex gap-3">
        <button
          class="rounded-lg border border-[#e8e0d5] bg-white px-4 py-1.5 text-sm text-gray-500 transition hover:text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          @click="revealAll"
        >
          全部显示答案
        </button>
        <button
          class="rounded-lg border border-[#e8e0d5] bg-white px-4 py-1.5 text-sm text-gray-500 transition hover:text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          @click="hideAll"
        >
          全部隐藏答案
        </button>
      </div>

      <!-- 翻译卡片列表 -->
      <div class="space-y-4">
        <div
          v-for="item in filteredData"
          :key="item.id"
          class="rounded-2xl border border-[#e8e0d5] bg-white p-5 shadow-sm transition-all duration-300 dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="mb-3 flex items-start gap-3">
            <span
              class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              :style="{ backgroundColor: categoryColors[item.category] || '#7EB8DA' }"
            >{{ item.id }}</span>
            <div class="flex-1">
              <p class="text-lg font-medium text-gray-800">{{ item.chinese }}</p>
              <p v-if="item.hint" class="mt-1 text-xs text-gray-400">💡 {{ item.hint }}</p>
            </div>
            <button
              class="shrink-0 rounded-lg border px-3 py-1.5 text-sm transition-all duration-200"
              :class="revealedMap[item.id]
                ? 'border-[#e8e0d5] bg-white text-gray-500 hover:text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                : 'border-transparent text-white shadow-sm'"
              :style="revealedMap[item.id]
                ? {}
                : { backgroundColor: categoryColors[item.category] || '#7EB8DA' }"
              @click="toggleReveal(item.id)"
            >
              {{ revealedMap[item.id] ? '隐藏答案' : '显示答案' }}
            </button>
          </div>
          <!-- 参考答案 -->
          <div
            v-if="revealedMap[item.id]"
            class="mt-3 rounded-xl px-4 py-3 transition-all duration-300"
            :style="{ backgroundColor: (categoryColors[item.category] || '#7EB8DA') + '18' }"
          >
            <p class="text-sm font-medium text-gray-500 mb-1">📝 参考译文</p>
            <p class="text-gray-800 leading-relaxed">{{ item.reference }}</p>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredData.length === 0" class="py-20 text-center text-gray-400">
        暂无该主题的翻译练习
      </div>
    </div>
  </div>
</template>
