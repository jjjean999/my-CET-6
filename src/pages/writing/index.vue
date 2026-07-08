<script setup>
defineOptions({
  name: 'WritingPage',
})
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="mx-auto max-w-screen-xl">
      <!-- 页面标题 -->
      <section class="mb-6 rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;">
        <h1 class="mb-2 text-3xl font-bold text-gray-800">CET-6 作文</h1>
        <p class="text-gray-500">了解六级短文写作的题型、评分标准与备考技巧</p>
      </section>

      <!-- 短文写作 -->
      <section class="rounded-2xl bg-white p-6 shadow-sm" style="border: 1px solid #e8e0d5;">
        <div class="mb-4 flex items-center gap-3">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white" style="background-color: #C3AED6;">写</span>
          <h2 class="text-xl font-bold text-gray-800">短文写作</h2>
        </div>

        <!-- 基本信息 -->
        <div class="mb-4 rounded-xl px-4 py-3" style="background-color: #C3AED618;">
          <h3 class="mb-2 font-semibold text-gray-700">📋 基本概念</h3>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>• 六级考试仅一篇写作，称为<strong>短文写作</strong></li>
            <li>• 满分 <strong>106.5 分</strong>（总分 710），<strong>63.9 分</strong>及格，考试时间 <strong>30 分钟</strong>，字数 <strong>150-200 词</strong></li>
            <li>• 写作形式：<strong>命题作文</strong>、<strong>看图作文</strong>、<strong>情景作文</strong></li>
            <li>• 文体：<strong>议论文</strong>、<strong>说明文</strong>，二者常常互相结合</li>
          </ul>
        </div>

        <!-- 评分标准 -->
        <div class="mb-4 rounded-xl px-4 py-3" style="background-color: #C3AED618;">
          <h3 class="mb-2 font-semibold text-gray-700">🎯 评分标准</h3>
          <p class="mb-2 text-sm text-gray-600">从<strong>内容</strong>和<strong>语言</strong>两个方面综合评判，二者为统一体——内容通过语言来表达，语言服务于内容。</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/60 px-3 py-2">
              <h4 class="mb-1 text-sm font-semibold text-gray-700">内容维度</h4>
              <ul class="space-y-0.5 text-sm text-gray-600">
                <li>• 是否<strong>切题</strong>，准确表达题目规定的内容</li>
                <li>• 是否<strong>充分表达思想</strong>，观点明确、论据充实</li>
              </ul>
            </div>
            <div class="rounded-lg bg-white/60 px-3 py-2">
              <h4 class="mb-1 text-sm font-semibold text-gray-700">语言维度</h4>
              <ul class="space-y-0.5 text-sm text-gray-600">
                <li>• 能否用英语<strong>清楚而确切地</strong>表达思想</li>
                <li>• 语言错误是否造成<strong>理解上的障碍</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 练习技巧 -->
        <div class="rounded-xl px-4 py-3" style="background-color: #C3AED618;">
          <h3 class="mb-2 font-semibold text-gray-700">💡 练习技巧</h3>
          <ol class="space-y-1.5 text-sm text-gray-600 list-decimal list-inside">
            <li>精析一篇真题范文，拆解其篇章结构、论证逻辑和亮点句型</li>
            <li>找同类型真题（命题/看图/情景），限时 30 分钟独立写一遍</li>
            <li>对照该篇范文逐句精析，标记自己与范文在结构、论证、语言上的差距</li>
            <li>每种类型（命题、看图、情景）考前至少按以上流程练一篇</li>
          </ol>
        </div>
      </section>
    </div>
  </div>
</template>
