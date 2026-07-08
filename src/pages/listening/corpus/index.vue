<script setup>
import {
  dayGroups,
  getAudioPath,
  getTranscriptPath,
  getSectionLabel,
} from '~/data/corpusMaterials'
import type { DayGroup, MaterialItem } from '~/data/corpusMaterials'

const stage = ref<'foundation' | 'intensive'>('foundation')

const stages = [
  {
    key: 'foundation' as const,
    label: '基础期（Day 1-7）',
    desc: '每天 1 篇 Section A 长对话，磨耳朵适应语速语调',
  },
  {
    key: 'intensive' as const,
    label: '强化期（Day 8-14）',
    desc: '每天 2 篇 Section B + C 混合精听，提升正确率到 60%+',
  },
]

const filteredGroups = computed<DayGroup[]>(() =>
  dayGroups.filter((g) => g.stage === stage.value),
)

/** 已完成打卡（localStorage） */
const completedDays = ref<Set<number>>(new Set())

function loadCompleted() {
  try {
    const raw = localStorage.getItem('corpus-completed')
    if (raw) {
      completedDays.value = new Set(JSON.parse(raw))
    }
  }
  catch { /* ignore */ }
}

function toggleCompleted(day: number) {
  if (completedDays.value.has(day)) {
    completedDays.value.delete(day)
  }
  else {
    completedDays.value.add(day)
  }
  localStorage.setItem(
    'corpus-completed',
    JSON.stringify([...completedDays.value]),
  )
}

loadCompleted()

/** 当天是否全部完成 */
function isDayCompleted(items: MaterialItem[]): boolean {
  return items.every((_, i) => completedDays.value.has(items[0].day * 100 + i))
}

/** 标记单篇完成 */
function toggleItem(item: MaterialItem, index: number) {
  const key = item.day * 100 + index
  if (completedDays.value.has(key)) {
    completedDays.value.delete(key)
  }
  else {
    completedDays.value.add(key)
  }
  localStorage.setItem(
    'corpus-completed',
    JSON.stringify([...completedDays.value]),
  )
}

function isItemCompleted(item: MaterialItem, index: number): boolean {
  return completedDays.value.has(item.day * 100 + index)
}

const router = useRouter()
function startListening(item: MaterialItem) {
  router.push(`/listening/corpus/${item.day}`)
}
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <h3 class="mb-2 text-xl font-semibold text-black dark:text-white">
      真题精听
    </h3>
    <p class="mb-6 text-sm">
      精选 CET-6 历年真题听力材料，按阶段编排，配合三遍精听法使用。点击「开始精听」进入逐句精听播放器。
    </p>

    <!-- 阶段选择 -->
    <div class="mb-6 flex gap-3">
      <button
        v-for="s in stages"
        :key="s.key"
        class="flex-1 rounded-lg border px-4 py-3 text-left transition-colors sm:flex-initial sm:min-w-[240px]"
        :class="stage === s.key
          ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30'
          : 'border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'"
        @click="stage = s.key"
      >
        <div class="font-medium text-gray-900 dark:text-white">
          {{ s.label }}
        </div>
        <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {{ s.desc }}
        </div>
      </button>
    </div>

    <!-- 材料列表，按 Day 分组 -->
    <div class="space-y-6">
      <div
        v-for="group in filteredGroups"
        :key="group.day"
        class="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <!-- Day 标题栏 -->
        <div class="flex items-center justify-between rounded-t-lg bg-gray-50 px-4 py-3 dark:bg-gray-800/80">
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Day {{ group.day }}
            </span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ group.stage === 'foundation' ? '基础期' : '强化期' }}
            </span>
            <span class="text-xs text-gray-400">
              {{ group.items.length }} 篇材料
            </span>
          </div>
          <!-- 整日打卡 -->
          <button
            class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors"
            :class="isDayCompleted(group.items)
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'"
            @click="group.items.forEach((it, i) => toggleItem(it, i))"
          >
            <span v-if="isDayCompleted(group.items)" class="i-carbon-checkmark-outline block h-3.5 w-3.5" />
            <span v-else class="i-carbon-checkbox block h-3.5 w-3.5" />
            {{ isDayCompleted(group.items) ? '已完成' : '全部完成' }}
          </button>
        </div>

        <!-- 每篇材料 -->
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
          <div
            v-for="(item, idx) in group.items"
            :key="item.identifier"
            class="flex items-center justify-between px-4 py-3"
          >
            <div class="flex items-start gap-3 min-w-0">
              <!-- 单篇打卡 -->
              <button class="mt-0.5 shrink-0" @click="toggleItem(item, idx)">
                <span
                  v-if="isItemCompleted(item, idx)"
                  class="i-carbon-checkmark-outline block h-5 w-5 text-green-500"
                />
                <span
                  v-else
                  class="i-carbon-checkbox block h-5 w-5 text-gray-300 hover:text-gray-400 dark:text-gray-600"
                />
              </button>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ getSectionLabel(item) }}
                  </span>
                  <span class="shrink-0 rounded border border-gray-200 px-1.5 py-px text-xs text-gray-400 dark:border-gray-600 dark:text-gray-500">
                    {{ item.questionCount }}题
                  </span>
                </div>
                <p class="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-400">
                  {{ item.yearLabel }} · {{ item.title }} — {{ item.desc }}
                </p>
              </div>
            </div>
            <button
              class="ml-3 shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              @click="startListening(item)"
            >
              开始精听
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
