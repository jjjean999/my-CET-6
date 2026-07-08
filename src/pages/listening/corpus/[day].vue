<script setup>
import {
  getMaterialsByDay,
  getAudioPath,
  getTranscriptPath,
  getSectionLabel,
} from '~/data/corpusMaterials'
import type { MaterialItem } from '~/data/corpusMaterials'
import { useRoute } from 'vue-router'

const route = useRoute()
const day = computed(() => Number(route.params.day))

const materials = computed<MaterialItem[]>(() => getMaterialsByDay(day.value))
const currentIdx = ref(0)

// 当前选中的材料
const currentItem = computed<MaterialItem>(
  () => materials.value[currentIdx.value] ?? materials.value[0],
)

const audioSrc = computed(() =>
  currentItem.value ? getAudioPath(currentItem.value) : '',
)

const transcriptSrc = computed(() =>
  currentItem.value ? getTranscriptPath(currentItem.value) : '',
)

// ===================== 音频播放器 =====================
const audioRef = ref<HTMLAudioElement>()
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const playbackRate = ref(1)
const loopStart = ref(0)
const loopEnd = ref(0)
const loopEnabled = ref(false)

const speedOptions = [0.5, 0.75, 1, 1.25, 1.5]

function setSpeed(rate: number) {
  playbackRate.value = rate
  if (audioRef.value) {
    audioRef.value.playbackRate = rate
  }
}

function togglePlay() {
  if (!audioRef.value) return
  if (audioRef.value.paused) {
    audioRef.value.play()
    isPlaying.value = true
  }
  else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

function seekBackward(seconds = 10) {
  if (audioRef.value) {
    audioRef.value.currentTime = Math.max(0, audioRef.value.currentTime - seconds)
  }
}

function seekForward(seconds = 10) {
  if (audioRef.value) {
    audioRef.value.currentTime = Math.min(
      audioRef.value.duration,
      audioRef.value.currentTime + seconds,
    )
  }
}

function onTimeUpdate() {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
  }
}

function onLoadedMetadata() {
  if (audioRef.value) {
    duration.value = audioRef.value.duration
    loopEnd.value = audioRef.value.duration
  }
}

function onEnded() {
  isPlaying.value = false
}

function onSeek(e: Event) {
  const target = e.target as HTMLInputElement
  if (audioRef.value) {
    audioRef.value.currentTime = Number(target.value)
  }
}

function setLoopStart() {
  loopStart.value = audioRef.value?.currentTime ?? 0
  if (loopEnd.value <= loopStart.value) {
    loopEnd.value = (audioRef.value?.duration ?? 0)
  }
}

function setLoopEnd() {
  loopEnd.value = audioRef.value?.currentTime ?? duration.value
  if (loopEnd.value <= loopStart.value) {
    loopStart.value = 0
  }
}

function toggleLoop() {
  loopEnabled.value = !loopEnabled.value
}

// AB 循环检查
let loopCheckInterval: ReturnType<typeof setInterval> | null = null

watch(loopEnabled, (on) => {
  if (on) {
    loopCheckInterval = setInterval(() => {
      if (
        audioRef.value
        && loopEnabled.value
        && audioRef.value.currentTime >= loopEnd.value
      ) {
        audioRef.value.currentTime = loopStart.value
      }
    }, 100)
  }
  else {
    if (loopCheckInterval) {
      clearInterval(loopCheckInterval)
      loopCheckInterval = null
    }
  }
})

onUnmounted(() => {
  if (loopCheckInterval) clearInterval(loopCheckInterval)
})

// ===================== 原文 =====================
const transcriptLines = ref<string[]>([])
const loadingTranscript = ref(false)

async function loadTranscript() {
  if (!transcriptSrc.value) return
  loadingTranscript.value = true
  try {
    const resp = await fetch(transcriptSrc.value)
    if (resp.ok) {
      const text = await resp.text()
      transcriptLines.value = text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
    }
    else {
      transcriptLines.value = []
    }
  }
  catch {
    transcriptLines.value = []
  }
  finally {
    loadingTranscript.value = false
  }
}

// 切换材料时重新加载原文
watch(currentIdx, () => {
  loadTranscript()
})

// 初始加载
loadTranscript()

// ===================== 原文解析 =====================
interface TranscriptLine {
  en: string
  zh: string
}
const parsedLines = computed<TranscriptLine[]>(() =>
  transcriptLines.value.map((line) => {
    const idx = line.indexOf(' // ')
    if (idx > 0) {
      return { en: line.slice(0, idx).trim(), zh: line.slice(idx + 4).trim() }
    }
    return { en: line, zh: '' }
  }),
)

// ===================== UI 状态 =====================
const showTranslation = ref(false)
const activePass = ref<1 | 2 | 3>(1) // 当前处于第几遍

const passGuide = [
  { pass: 1, icon: 'i-carbon-play', label: '第一遍·实战', desc: '不看原文，完整听一遍 → 理解大意 + 做题' },
  { pass: 2, icon: 'i-carbon-pause-past', label: '第二遍·逐句', desc: '逐句暂停 → 反复听 → 写下听到的每个词' },
  { pass: 3, icon: 'i-carbon-document', label: '第三遍·对照', desc: '对照原文 → 标记没听出的词和连读 → 跟读' },
]

function nextPass() {
  if (activePass.value < 3) activePass.value = (activePass.value + 1) as 1 | 2 | 3
}

function prevPass() {
  if (activePass.value > 1) activePass.value = (activePass.value - 1) as 1 | 2 | 3
}

// ===================== 辅助 =====================
function formatTime(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function switchMaterial(idx: number) {
  currentIdx.value = idx
  // 重置播放状态
  isPlaying.value = false
  currentTime.value = 0
  duration.value = 0
  loopEnabled.value = false
  loopStart.value = 0
  loopEnd.value = 0
}

const router = useRouter()
function goBack() {
  router.push('/listening/corpus')
}
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <!-- 顶部导航 -->
    <div class="mb-4 flex items-center gap-3">
      <button
        class="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
        @click="goBack"
      >
        <span class="i-carbon-arrow-left block h-4 w-4" />
        返回列表
      </button>
      <h3 class="text-xl font-semibold text-black dark:text-white">
        Day {{ day }} · 精听播放器
      </h3>
    </div>

    <!-- 材料选择（多篇时显示） -->
    <div v-if="materials.length > 1" class="mb-4 flex gap-2">
      <button
        v-for="(item, idx) in materials"
        :key="item.identifier"
        class="rounded-lg border px-3 py-1.5 text-sm transition-colors"
        :class="idx === currentIdx
          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300'
          : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800'"
        @click="switchMaterial(idx)"
      >
        {{ item.title }}
      </button>
    </div>

    <!-- 当前材料信息 -->
    <div v-if="currentItem" class="mb-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div class="flex items-center gap-2">
        <span class="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
          {{ getSectionLabel(currentItem) }}
        </span>
        <span class="rounded border border-gray-200 px-1.5 py-px text-xs text-gray-400 dark:border-gray-600">
          {{ currentItem.questionCount }}题
        </span>
        <span class="text-xs text-gray-400">{{ currentItem.yearLabel }}</span>
      </div>
      <p class="mt-1.5 text-sm text-gray-600 dark:text-gray-300">
        {{ currentItem.desc }}
      </p>
    </div>

    <!-- 三遍法指引 -->
    <div class="mb-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
          三遍精听法
        </span>
        <div class="flex gap-1">
          <button
            class="rounded px-2 py-0.5 text-xs transition-colors"
            :class="activePass > 1 ? 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30' : 'text-gray-300 dark:text-gray-600'"
            :disabled="activePass <= 1"
            @click="prevPass"
          >
            ← 上一步
          </button>
          <button
            class="rounded px-2 py-0.5 text-xs transition-colors"
            :class="activePass < 3 ? 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30' : 'text-gray-300 dark:text-gray-600'"
            :disabled="activePass >= 3"
            @click="nextPass"
          >
            下一步 →
          </button>
        </div>
      </div>
      <div class="flex gap-2">
        <button
          v-for="p in passGuide"
          :key="p.pass"
          class="flex-1 rounded-lg border p-2.5 text-left text-sm transition-colors"
          :class="activePass === p.pass
            ? 'border-blue-400 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30'
            : 'border-gray-150 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50'"
          @click="activePass = p.pass as 1 | 2 | 3"
        >
          <div class="flex items-center gap-1.5">
            <span :class="[p.icon, 'block h-4 w-4 flex-shrink-0', activePass === p.pass ? 'text-blue-500' : 'text-gray-400']" />
            <span class="font-medium" :class="activePass === p.pass ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'">
              {{ p.label }}
            </span>
          </div>
          <p class="mt-1 text-xs" :class="activePass === p.pass ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'">
            {{ p.desc }}
          </p>
        </button>
      </div>
    </div>

    <!-- 音频播放器 -->
    <div class="mb-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <!-- 隐藏的 audio 元素 -->
      <!-- eslint-disable-next-line vuejs-accessibility/media-has-caption -->
      <audio
        ref="audioRef"
        :src="audioSrc"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
        @ended="onEnded"
      />

      <!-- 进度条 -->
      <div class="mb-3">
        <input
          type="range"
          class="w-full accent-blue-600"
          :min="0"
          :max="duration"
          :step="0.1"
          :value="currentTime"
          @input="onSeek"
        >
        <div class="flex justify-between text-xs text-gray-400">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>
      </div>

      <!-- 控制栏 -->
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <!-- 后退 10s -->
          <button
            class="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            @click="seekBackward(10)"
          >
            <span class="i-carbon-skip-back block h-5 w-5" />
          </button>

          <!-- 播放/暂停 -->
          <button
            class="rounded-full bg-blue-600 p-2.5 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            @click="togglePlay"
          >
            <span v-if="isPlaying" class="i-carbon-pause block h-5 w-5" />
            <span v-else class="i-carbon-play block h-5 w-5" />
          </button>

          <!-- 前进 10s -->
          <button
            class="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            @click="seekForward(10)"
          >
            <span class="i-carbon-skip-forward block h-5 w-5" />
          </button>
        </div>

        <!-- 变速 -->
        <div class="flex items-center gap-1">
          <button
            v-for="rate in speedOptions"
            :key="rate"
            class="rounded px-2.5 py-1 text-xs font-medium transition-colors"
            :class="playbackRate === rate
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
              : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'"
            @click="setSpeed(rate)"
          >
            {{ rate }}x
          </button>
        </div>

        <!-- AB 循环 -->
        <div class="flex items-center gap-1.5">
          <button
            class="rounded-lg border px-2 py-1 text-xs transition-colors"
            :class="loopEnabled
              ? 'border-blue-400 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-300'
              : 'border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'"
            @click="toggleLoop"
          >
            <span class="i-carbon-repeat block h-3.5 w-3.5 inline-block mr-1 align-text-bottom" />
            AB循环{{ loopEnabled ? ' ON' : '' }}
          </button>
          <button
            class="rounded border border-gray-200 px-1.5 py-1 text-xs text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
            @click="setLoopStart"
          >
            A
          </button>
          <button
            class="rounded border border-gray-200 px-1.5 py-1 text-xs text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
            @click="setLoopEnd"
          >
            B
          </button>
          <span class="text-xs text-gray-400">
            {{ formatTime(loopStart) }} - {{ formatTime(loopEnd) }}
          </span>
        </div>
      </div>
    </div>

    <!-- 原文区域 -->
    <div class="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div class="flex items-center justify-between rounded-t-lg bg-gray-50 px-4 py-3 dark:bg-gray-800/80">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
          原文对照
        </span>
        <label class="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 cursor-pointer">
          <input
            v-model="showTranslation"
            type="checkbox"
            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
          >
          显示译文
        </label>
      </div>

      <!-- 加载中 -->
      <div v-if="loadingTranscript" class="px-4 py-8 text-center text-sm text-gray-400">
        加载原文中...
      </div>

      <!-- 无原文 -->
      <div v-else-if="parsedLines.length === 0" class="px-4 py-8 text-center">
        <div class="mb-2 text-3xl text-gray-300 dark:text-gray-600">
          <span class="i-carbon-document-blank block mx-auto h-10 w-10" />
        </div>
        <p class="text-sm text-gray-400">
          暂无原文
        </p>
        <p class="mt-1 text-xs text-gray-400">
          请将原文文件放入 public/corpus/transcripts/ 对应目录
        </p>
      </div>

      <!-- 原文逐句 -->
      <div v-else class="divide-y divide-gray-100 px-4 py-2 dark:divide-gray-700">
        <div
          v-for="(line, idx) in parsedLines"
          :key="idx"
          class="py-2"
        >
          <p class="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
            <span class="mr-2 select-none text-xs text-gray-300 dark:text-gray-600">{{ idx + 1 }}</span>
            {{ line.en }}
          </p>
          <p
            v-if="showTranslation && line.zh"
            class="mt-0.5 pl-5 text-xs leading-relaxed text-gray-400 dark:text-gray-500"
          >
            {{ line.zh }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
