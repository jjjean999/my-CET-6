<script setup>
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <h3 class="mb-4 text-xl font-semibold text-black dark:text-white">
      核心方法：三遍精听法
    </h3>
    <p class="mb-4">
      精听是提升六级听力的核心方法。不同于雅思的"听写单词"，六级精听的重点是<strong>理解+辨析</strong>——搞清楚每句话的意思、正确答案如何同义改写、干扰项是如何编出来的。
    </p>

    <!-- 三遍法流程 -->
    <div class="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/30">
        <div class="mb-2 text-lg font-bold text-blue-700 dark:text-blue-300">第一遍：实战模拟</div>
        <ul class="ml-4 list-disc text-sm">
          <li>严格按考试流程做题</li>
          <li>边听边涂答题卡</li>
          <li>不确定也先选一个</li>
          <li>不暂停、不回放</li>
        </ul>
      </div>
      <div class="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/30">
        <div class="mb-2 text-lg font-bold text-orange-700 dark:text-orange-300">第二遍：逐句精听</div>
        <ul class="ml-4 list-disc text-sm">
          <li>逐句暂停，问自己三个问题</li>
          <li>这句子什么意思？</li>
          <li>哪个选项和它对应？</li>
          <li>干扰项为什么错？</li>
        </ul>
      </div>
      <div class="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/30">
        <div class="mb-2 text-lg font-bold text-green-700 dark:text-green-300">第三遍：看原文听</div>
        <ul class="ml-4 list-disc text-sm">
          <li>对照原文再听一遍</li>
          <li>标出不认识的词汇短语</li>
          <li>注意连读、弱读、省音</li>
          <li>标注所有信号词</li>
        </ul>
      </div>
      <div class="rounded-lg border border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/30">
        <div class="mb-2 text-lg font-bold text-pink-700 dark:text-pink-300">第四遍（可选）</div>
        <ul class="ml-4 list-disc text-sm">
          <li>不看原文盲听</li>
          <li>直到每个词都清晰</li>
          <li>跟读模仿语调</li>
          <li>培养语感和语速耐受</li>
        </ul>
      </div>
    </div>

    <div class="mb-6 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      <p class="font-medium">第二遍是精髓：不要只对答案，要搞清楚"干扰项是怎么编出来的"——这才是 CET-6 选择题的核心能力。</p>
    </div>

    <!-- 常见干扰项套路 -->
    <h4 class="mb-3 text-lg font-semibold text-black dark:text-white">常见干扰项套路</h4>
    <div class="mb-6 grid gap-3 sm:grid-cols-2">
      <div class="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
        <span class="font-medium text-red-600 dark:text-red-400">原词重现</span>
        <p class="mt-1 text-sm">选项和原文用词一模一样 → 多半是干扰（正确选项反而是同义改写）</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
        <span class="font-medium text-red-600 dark:text-red-400">张冠李戴</span>
        <p class="mt-1 text-sm">把 A 的特征安在 B 身上，需要分清说话人和描述对象</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
        <span class="font-medium text-red-600 dark:text-red-400">反义陷阱</span>
        <p class="mt-1 text-sm">原文说 not / never / hardly，选项说 is / always，正好相反</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
        <span class="font-medium text-red-600 dark:text-red-400">部分正确</span>
        <p class="mt-1 text-sm">半句对半句错，诱导你选——必须整句含义都对才行</p>
      </div>
    </div>

    <!-- 三个练习维度 -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      三个练习维度
    </h3>

    <!-- 维度一 -->
    <div class="mb-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <h4 class="mb-3 text-lg font-semibold text-indigo-700 dark:text-indigo-300">
        维度一：选项预判能力
      </h4>
      <p class="mb-3 text-sm">
        因为问题不印在试卷上，六级听力的独特能力是<strong>"看选项，猜问题"</strong>。每天花 10 分钟专门练"读选项→猜问题"，一周就能形成条件反射。
      </p>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th class="px-4 py-2">选项特征</th>
              <th class="px-4 py-2">大概率问什么</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-gray-700">
              <td class="px-4 py-2 font-medium">都是数字</td>
              <td class="px-4 py-2">时间 / 数量 / 价格 / 年份</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="px-4 py-2 font-medium">都是地点</td>
              <td class="px-4 py-2">地点 / 场景 / 发生地</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="px-4 py-2 font-medium">都是动词短语</td>
              <td class="px-4 py-2">行为 / 建议 / 下一步做什么</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="px-4 py-2 font-medium">都是形容词/感受</td>
              <td class="px-4 py-2">态度 / 评价 / 感受</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium">选项有男女差异</td>
              <td class="px-4 py-2">注意区分男女说话人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 维度二 -->
    <div class="mb-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <h4 class="mb-3 text-lg font-semibold text-indigo-700 dark:text-indigo-300">
        维度二：同义替换敏感度
      </h4>
      <p class="mb-3 text-sm">
        CET-6 正确答案极少是原文原词，几乎都是同义改写。需要建立自己的<strong>"同义替换库"</strong>。做完真题后，把每题正确选项与原文对应处列出来，标注用了什么同义替换，积累成册。做 10 套题就能覆盖大部分高频替换。
      </p>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p class="font-medium text-gray-900 dark:text-white">important</p>
          <p class="text-xs text-gray-500">→ significant / crucial / vital / essential</p>
        </div>
        <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p class="font-medium text-gray-900 dark:text-white">because</p>
          <p class="text-xs text-gray-500">→ due to / owing to / as a result of</p>
        </div>
        <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p class="font-medium text-gray-900 dark:text-white">think</p>
          <p class="text-xs text-gray-500">→ believe / suppose / assume / hold the view</p>
        </div>
        <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p class="font-medium text-gray-900 dark:text-white">increase</p>
          <p class="text-xs text-gray-500">→ rise / grow / climb / soar</p>
        </div>
        <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p class="font-medium text-gray-900 dark:text-white">solve</p>
          <p class="text-xs text-gray-500">→ address / tackle / deal with / cope with</p>
        </div>
        <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p class="font-medium text-gray-900 dark:text-white">but / however</p>
          <p class="text-xs text-gray-500">→ yet / actually / in fact / on the contrary</p>
        </div>
      </div>
    </div>

    <!-- 维度三 -->
    <div class="mb-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <h4 class="mb-3 text-lg font-semibold text-indigo-700 dark:text-indigo-300">
        维度三：信号词抓取
      </h4>
      <p class="mb-3 text-sm">
        信号词是六级听力的"路标"，后面 80% 跟答案。做精听时，用荧光笔把原文所有信号词标出来，检查答案是否出现在信号词附近。十套题后你就知道"哪些词后面要竖起耳朵"。
      </p>
      <div class="grid gap-3 sm:grid-cols-2">
        <div class="rounded-lg border border-orange-100 bg-orange-50/50 p-3 dark:border-orange-800/30 dark:bg-orange-900/20">
          <p class="mb-1 font-medium text-orange-700 dark:text-orange-300">转折类（最高频！）</p>
          <p class="text-sm">but, however, yet, actually, in fact, on the contrary, whereas, while</p>
        </div>
        <div class="rounded-lg border border-purple-100 bg-purple-50/50 p-3 dark:border-purple-800/30 dark:bg-purple-900/20">
          <p class="mb-1 font-medium text-purple-700 dark:text-purple-300">强调类</p>
          <p class="text-sm">the point is, what I mean is, the most important, note that, remember that</p>
        </div>
        <div class="rounded-lg border border-green-100 bg-green-50/50 p-3 dark:border-green-800/30 dark:bg-green-900/20">
          <p class="mb-1 font-medium text-green-700 dark:text-green-300">因果类</p>
          <p class="text-sm">because, so, therefore, thus, as a result, that's why, the reason is</p>
        </div>
        <div class="rounded-lg border border-blue-100 bg-blue-50/50 p-3 dark:border-blue-800/30 dark:bg-blue-900/20">
          <p class="mb-1 font-medium text-blue-700 dark:text-blue-300">顺序类</p>
          <p class="text-sm">first, second, then, next, finally, last but not least, to begin with</p>
        </div>
      </div>
    </div>

    <!-- 30天训练计划 -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      30 天训练计划
    </h3>
    <p class="mb-2 text-sm">
      以下为 30 天备考计划。如果你的备考时间<strong>超过 30 天</strong>，建议<strong>延长基础期和强化期</strong>——基础期加长到 10-14 天充分磨耳朵，强化期加长到 10-14 天把正确率稳固到 65%+，提速期和冲刺期各保持 7-10 天即可。
    </p>
    <div class="mb-4 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      <p><strong>备考期 &gt; 30 天调整方案：</strong>基础期 10-14 天 → 强化期 10-14 天 → 提速期 7-10 天 → 冲刺期 7-10 天。总时长弹性扩展，关键是基础要打牢。</p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-4 py-3">阶段</th>
            <th class="px-4 py-3">时间</th>
            <th class="px-4 py-3">每日任务</th>
            <th class="px-4 py-3">重点</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">基础期</span>
            </td>
            <td class="px-4 py-3">Day 1-7</td>
            <td class="px-4 py-3">每天 1 篇真题精听（三遍法）+ 整理同义替换 20 组</td>
            <td class="px-4 py-3">磨耳朵，适应语速，建立精听习惯</td>
          </tr>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">强化期</span>
            </td>
            <td class="px-4 py-3">Day 8-14</td>
            <td class="px-4 py-3">每天 2 篇精听 + 选项预判专项训练 10 分钟</td>
            <td class="px-4 py-3">提升正确率到 60%+，熟悉干扰项套路</td>
          </tr>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">提速期</span>
            </td>
            <td class="px-4 py-3">Day 15-21</td>
            <td class="px-4 py-3">每天 1 篇精听 + 1 套完整模拟（严格计时）</td>
            <td class="px-4 py-3">训练时间分配和涂卡节奏</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/50 dark:text-red-300">冲刺期</span>
            </td>
            <td class="px-4 py-3">Day 22-30</td>
            <td class="px-4 py-3">每 2 天 1 套全真模拟 + 错题本回顾</td>
            <td class="px-4 py-3">稳定心态，查漏补缺</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 辅线练习 -->
    <h4 class="mb-3 mt-6 text-lg font-semibold text-black dark:text-white">辅线练习（贯穿全程）</h4>
    <div class="mb-6 grid gap-3 sm:grid-cols-2">
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h5 class="mb-2 font-medium text-gray-900 dark:text-white">泛听磨耳（每天 20-30 分钟）</h5>
        <ul class="ml-4 list-disc text-sm">
          <li>VOA 常速英语 — 美式发音为主，贴合六级</li>
          <li>BBC 6 Minute English — 短小精悍，话题接近 Section C</li>
          <li>TED-Ed — 学术讲座风格，匹配 Section C</li>
          <li>六级真题音频循环播放 — 培养"语感"</li>
        </ul>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h5 class="mb-2 font-medium text-gray-900 dark:text-white">跟读模仿 Shadowing（每天 5 分钟）</h5>
        <ul class="ml-4 list-disc text-sm">
          <li>选一篇真题 Section C 音频</li>
          <li>语速调到 0.75 倍</li>
          <li>跟在后面模仿朗读</li>
          <li>重点模仿连读、弱读、语调</li>
          <li>半个月后语速耐受度明显提升</li>
        </ul>
      </div>
    </div>

    <!-- 常见误区 -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      常见误区
    </h3>
    <div class="mb-6 grid gap-3 sm:grid-cols-2">
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">只做题不精听</p>
          <p class="text-sm text-red-600 dark:text-red-400">做 20 套题不如精听 10 套</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">精听 = 听写每个词</p>
          <p class="text-sm text-red-600 dark:text-red-400">六级不需要拼写，逐句理解意思+定位答案才是目的</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">做完就扔</p>
          <p class="text-sm text-red-600 dark:text-red-400">不分析干扰项、不整理同义替换 = 白做</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">只听不跟读</p>
          <p class="text-sm text-red-600 dark:text-red-400">口语和听力神经同源，跟读是提升听力效率最高的方法之一</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">放弃 Section C</p>
          <p class="text-sm text-red-600 dark:text-red-400">Section C 每题 14.2 分是 Section A 的两倍，最值得投入时间</p>
        </div>
      </div>
    </div>


  </div>
</template>
