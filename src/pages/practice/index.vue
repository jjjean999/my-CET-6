<script setup lang="ts">
import { writingQuestions, readingQuestions, listeningQuestions, clozeQuestions, translationQuestions } from './practiceData.js'

defineOptions({
  name: 'PracticePage',
})

const tabs = ['写作', '阅读', '听力', '选词填空', '翻译']
const activeTab = ref('写作')

// 答题状态
const userAnswers = reactive<Record<string, any>>({})
const submittedMap = reactive<Record<string, boolean>>({})
const scoreMap = reactive<Record<string, number>>({})

function selectAnswer(questionId: string, optionIndex: number) {
  if (submittedMap[questionId]) return
  userAnswers[questionId] = optionIndex
}

function submitAnswer(questionId: string, correctIndex: number, total?: number) {
  submittedMap[questionId] = true
  if (userAnswers[questionId] === correctIndex) {
    scoreMap[questionId] = 1
  } else {
    scoreMap[questionId] = 0
  }
}

function getTotalScore(prefix: string, list: any[]) {
  return list.reduce((sum, item) => sum + (scoreMap[`${prefix}-${item.id}`] || 0), 0)
}

// 写作用
const writingSubmitted = reactive<Record<number, boolean>>({})

// 颜色主题
const tabColors: Record<string, string> = {
  '写作': '#F5B7B1',
  '阅读': '#F5E6A3',
  '听力': '#C3AED6',
  '选词填空': '#A8D8B9',
  '翻译': '#AED9E0',
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="mx-auto max-w-screen-xl">
      <!-- 页面标题 -->
      <section class="mb-6 rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;">
        <h1 class="mb-2 text-3xl font-bold text-gray-800">CET-6 真题模考</h1>
        <p class="text-gray-500">历年真题模拟练习，包含写作、阅读、听力、选词填空和翻译五大题型。</p>
      </section>

      <!-- 题型 Tab -->
      <div class="mb-6 flex flex-wrap gap-2">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200"
          :class="activeTab === tab ? 'text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50'"
          :style="activeTab === tab
            ? { backgroundColor: tabColors[tab] }
            : { border: '1px solid #e8e0d5' }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- ==================== 写作 ==================== -->
      <div v-if="activeTab === '写作'" class="space-y-6">
        <div
          v-for="q in writingQuestions"
          :key="q.id"
          class="rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;"
        >
          <div class="mb-4 flex items-center gap-3">
            <span class="rounded-full px-3 py-1 text-xs font-bold text-white" style="background-color: #F5B7B1;">
              {{ q.year }}
            </span>
            <h3 class="text-lg font-bold text-gray-800">{{ q.title }}</h3>
          </div>
          <p class="mb-4 text-gray-600 text-sm leading-relaxed">{{ q.directions }}</p>
          <button
            class="rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-85"
            style="background-color: #F5B7B1;"
            @click="writingSubmitted[q.id] = !writingSubmitted[q.id]"
          >
            {{ writingSubmitted[q.id] ? '隐藏范文' : '查看范文' }}
          </button>
          <div
            v-if="writingSubmitted[q.id]"
            class="mt-4 rounded-xl px-5 py-4 transition-all duration-300"
            style="background-color: #F5B7B118;"
          >
            <p class="text-sm font-medium text-gray-500 mb-2">📝 参考范文</p>
            <p class="text-gray-700 leading-relaxed whitespace-pre-line text-sm">{{ q.reference }}</p>
          </div>
        </div>
      </div>

      <!-- ==================== 阅读 ==================== -->
      <div v-if="activeTab === '阅读'" class="space-y-8">
        <div
          v-for="q in readingQuestions"
          :key="q.id"
          class="rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;"
        >
          <span class="inline-block rounded-full px-3 py-1 text-xs font-bold text-white mb-4" style="background-color: #F5E6A3; color: #333;">
            {{ q.year }}
          </span>
          <div class="mb-6 rounded-xl p-5 leading-relaxed text-gray-700 text-sm" style="background-color: #fafaf7;">
            {{ q.passage }}
          </div>
          <div class="space-y-4">
            <div v-for="(question, qi) in q.questions" :key="qi" class="rounded-xl p-4" style="background-color: #fafaf7;">
              <p class="mb-3 text-sm font-medium text-gray-800">
                <span class="mr-1 font-bold" style="color: #F0C27F;">Q{{ qi + 1 }}.</span>
                {{ question.q }}
              </p>
              <div class="space-y-2">
                <label
                  v-for="(opt, oi) in question.options"
                  :key="oi"
                  class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-150"
                  :class="{
                    'font-medium': submittedMap[`reading-${q.id}-${qi}`] && oi === question.answer,
                    'line-through opacity-60': submittedMap[`reading-${q.id}-${qi}`] && userAnswers[`reading-${q.id}-${qi}`] === oi && oi !== question.answer,
                  }"
                  :style="submittedMap[`reading-${q.id}-${qi}`]
                    ? (oi === question.answer ? { backgroundColor: '#A8D8B940' } : {})
                    : { border: '1px solid #e8e0d5' }"
                >
                  <input
                    type="radio"
                    :name="`reading-${q.id}-${qi}`"
                    :value="oi"
                    :disabled="submittedMap[`reading-${q.id}-${qi}`]"
                    :checked="userAnswers[`reading-${q.id}-${qi}`] === oi"
                    @change="selectAnswer(`reading-${q.id}-${qi}`, oi)"
                    class="accent-current"
                    :style="{ accentColor: tabColors['阅读'] }"
                  />
                  <span>{{ opt }}</span>
                  <span
                    v-if="submittedMap[`reading-${q.id}-${qi}`] && oi === question.answer"
                    class="text-xs font-bold" style="color: #A8D8B9;"
                  >✓ 正确</span>
                </label>
              </div>
              <button
                v-if="!submittedMap[`reading-${q.id}-${qi}`]"
                class="mt-3 rounded-lg px-4 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:opacity-85"
                style="background-color: #F5E6A3; color: #333;"
                @click="submitAnswer(`reading-${q.id}-${qi}`, question.answer)"
              >
                提交答案
              </button>
              <span
                v-else
                class="mt-3 inline-block text-xs"
                :class="scoreMap[`reading-${q.id}-${qi}`] ? 'text-green-600' : 'text-red-400'"
              >
                {{ scoreMap[`reading-${q.id}-${qi}`] ? '回答正确！' : '回答错误' }}
              </span>
            </div>
          </div>
          <div class="mt-4 text-right text-sm text-gray-400">
            得分：{{ getTotalScore('reading', [{id: `${q.id}-0`}, {id: `${q.id}-1`}, {id: `${q.id}-2`}].filter(i => scoreMap[`reading-${i.id}`] !== undefined)) }} / {{ q.questions.length }}
          </div>
        </div>
      </div>

      <!-- ==================== 听力 ==================== -->
      <div v-if="activeTab === '听力'" class="space-y-6">
        <div
          v-for="q in listeningQuestions"
          :key="q.id"
          class="rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;"
        >
          <div class="mb-3 flex items-center gap-3">
            <span class="rounded-full px-3 py-1 text-xs font-bold text-white" style="background-color: #C3AED6;">
              {{ q.year }}
            </span>
            <span class="rounded-full px-2 py-0.5 text-xs text-gray-500" style="border: 1px solid #e8e0d5;">
              {{ q.type }}
            </span>
          </div>
          <div class="mb-4 rounded-xl p-4 leading-relaxed text-gray-700 text-sm" style="background-color: #fafaf7;">
            {{ q.script }}
          </div>
          <div class="space-y-2">
            <label
              v-for="(opt, oi) in q.options"
              :key="oi"
              class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-150"
              :class="{
                'font-medium': submittedMap[`listening-${q.id}`] && oi === q.answer,
                'line-through opacity-60': submittedMap[`listening-${q.id}`] && userAnswers[`listening-${q.id}`] === oi && oi !== q.answer,
              }"
              :style="submittedMap[`listening-${q.id}`]
                ? (oi === q.answer ? { backgroundColor: '#C3AED640' } : {})
                : { border: '1px solid #e8e0d5' }"
            >
              <input
                type="radio"
                :name="`listening-${q.id}`"
                :value="oi"
                :disabled="submittedMap[`listening-${q.id}`]"
                :checked="userAnswers[`listening-${q.id}`] === oi"
                @change="selectAnswer(`listening-${q.id}`, oi)"
                class="accent-current"
                :style="{ accentColor: tabColors['听力'] }"
              />
              <span>{{ opt }}</span>
              <span
                v-if="submittedMap[`listening-${q.id}`] && oi === q.answer"
                class="text-xs font-bold" style="color: #A8D8B9;"
              >✓ 正确</span>
            </label>
          </div>
          <button
            v-if="!submittedMap[`listening-${q.id}`]"
            class="mt-3 rounded-lg px-4 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:opacity-85"
            style="background-color: #C3AED6;"
            @click="submitAnswer(`listening-${q.id}`, q.answer)"
          >
            提交答案
          </button>
          <span
            v-else
            class="mt-3 inline-block text-xs"
            :class="scoreMap[`listening-${q.id}`] ? 'text-green-600' : 'text-red-400'"
          >
            {{ scoreMap[`listening-${q.id}`] ? '回答正确！' : '回答错误' }}
          </span>
        </div>
      </div>

      <!-- ==================== 选词填空 ==================== -->
      <div v-if="activeTab === '选词填空'" class="space-y-6">
        <div
          v-for="q in clozeQuestions"
          :key="q.id"
          class="rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;"
        >
          <span class="inline-block rounded-full px-3 py-1 text-xs font-bold text-white mb-4" style="background-color: #A8D8B9;">
            {{ q.year }}
          </span>
          <div class="mb-4 rounded-xl p-5 leading-relaxed text-gray-700 text-sm" style="background-color: #fafaf7;">
            {{ q.passage }}
          </div>
          <div class="mb-4 flex flex-wrap gap-2">
            <span
              v-for="word in q.options"
              :key="word"
              class="rounded-lg px-3 py-1 text-xs font-medium"
              style="background-color: #A8D8B920; color: #333;"
            >{{ word }}</span>
          </div>
          <button
            v-if="!submittedMap[`cloze-${q.id}`]"
            class="rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-85"
            style="background-color: #A8D8B9; color: #333;"
            @click="submittedMap[`cloze-${q.id}`] = true"
          >
            显示答案
          </button>
          <div
            v-if="submittedMap[`cloze-${q.id}`]"
            class="mt-4 rounded-xl px-5 py-3" style="background-color: #A8D8B918;"
          >
            <p class="text-sm font-medium text-gray-500 mb-2">答案</p>
            <p class="text-gray-700">
              <span v-for="(ans, ai) in q.answers" :key="ai" class="mr-2 rounded px-2 py-0.5 text-sm font-medium" style="background-color: #A8D8B930;">
                ({{ ai + 1 }}) {{ ans }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <!-- ==================== 翻译 ==================== -->
      <div v-if="activeTab === '翻译'" class="space-y-6">
        <div
          v-for="q in translationQuestions"
          :key="q.id"
          class="rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;"
        >
          <div class="mb-4 flex items-center gap-3">
            <span class="rounded-full px-3 py-1 text-xs font-bold text-white" style="background-color: #AED9E0; color: #333;">
              {{ q.year }}
            </span>
          </div>
          <p class="mb-4 text-gray-800 leading-relaxed">{{ q.chinese }}</p>
          <button
            class="rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:opacity-85"
            style="background-color: #AED9E0; color: #333;"
            @click="submittedMap[`translation-${q.id}`] = !submittedMap[`translation-${q.id}`]"
          >
            {{ submittedMap[`translation-${q.id}`] ? '隐藏参考译文' : '查看参考译文' }}
          </button>
          <div
            v-if="submittedMap[`translation-${q.id}`]"
            class="mt-4 rounded-xl px-5 py-4 transition-all duration-300"
            style="background-color: #AED9E018;"
          >
            <p class="text-sm font-medium text-gray-500 mb-2">📝 参考译文</p>
            <p class="text-gray-700 leading-relaxed text-sm">{{ q.reference }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
