<script setup>
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <!-- ===== 核心方法：三步精读法 ===== -->
    <h3 class="mb-4 text-xl font-semibold text-black dark:text-white">
      核心方法：三步精读法
    </h3>
    <p class="mb-4">
      刷题不是目的，<strong>精析才是提分的关键</strong>。每做完一篇阅读，不要只对答案就扔到一边——花 2 倍于做题的时间来精析，正确率才能持续上升。做 5 套精析胜过做 20 套只对答案。
    </p>

    <div class="mb-6 grid gap-4 sm:grid-cols-3">
      <div class="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/30">
        <div class="mb-2 text-lg font-bold text-blue-700 dark:text-blue-300">第一步：不计时做题</div>
        <ul class="ml-4 list-disc text-sm">
          <li><strong>先做对，再求快</strong></li>
          <li>初期不设时间限制，认真读完</li>
          <li>逐题吃透定位和同义替换逻辑</li>
          <li>用铅笔在纸质试卷上勾画标记</li>
          <li>坚持约 <strong>2 周</strong>（或依备考计划延长）</li>
        </ul>
      </div>
      <div class="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/30">
        <div class="mb-2 text-lg font-bold text-orange-700 dark:text-orange-300">第二步：逐题精析</div>
        <ul class="ml-4 list-disc text-sm">
          <li>对完答案后每道题写下：</li>
          <li>定位句是原文哪一句？</li>
          <li>正确选项如何同义改写？</li>
          <li>三个干扰项分别错在哪？</li>
          <li><strong>积累同义替换对子</strong></li>
        </ul>
      </div>
      <div class="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/30">
        <div class="mb-2 text-lg font-bold text-green-700 dark:text-green-300">第三步：复盘总结</div>
        <ul class="ml-4 list-disc text-sm">
          <li>全文无障碍通读一遍</li>
          <li>查不认识的词，标在试卷上</li>
          <li>拆解所有没读懂的长难句</li>
          <li>回顾错题，写"避坑笔记"</li>
        </ul>
      </div>
    </div>

    <div class="mb-6 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      <p class="font-medium">第二步是核心：不要只对答案。搞清楚"干扰项是怎么编出来的"和"正确选项是怎么同义改写的"——这才是六级阅读提分的根本能力。</p>
    </div>

    <div class="mb-6 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      <p><strong>何时开始计时？</strong></p>
      <p class="mt-1">经过约 2 周（或更久，依据自身备考计划调整）的不计时练习，当你能稳定做到：定位句找得快、干扰项分析得清、同义替换能识别——这时再开始引入计时。先保证正确率稳固，再逐步提速到考场时间标准。正确率没稳之前就掐表，只会让自己紧张出错。</p>
    </div>

    <!-- ===== 同义替换专项 ===== -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      同义替换专项训练
    </h3>
    <p class="mb-3 text-sm">
      六级阅读的本质是<strong>同义替换识别</strong>。需要建立自己的"同义替换库"。做完真题后，把每题正确选项与原文定位句对照，提取替换对子，分类归档。做 10 套题即可覆盖大部分高频替换。
    </p>

    <div class="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">important</p>
        <p class="text-xs text-gray-500">→ significant / crucial / vital / essential / indispensable / paramount</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">change</p>
        <p class="text-xs text-gray-500">→ alter / transform / convert / shift / modify / reshape</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">cause / lead to</p>
        <p class="text-xs text-gray-500">→ result in / contribute to / give rise to / bring about / trigger</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">solve / deal with</p>
        <p class="text-xs text-gray-500">→ address / tackle / resolve / cope with / handle / combat</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">increase</p>
        <p class="text-xs text-gray-500">→ rise / grow / climb / soar / surge / escalate</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">decrease</p>
        <p class="text-xs text-gray-500">→ decline / drop / fall / shrink / dwindle / plunge</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">show / indicate</p>
        <p class="text-xs text-gray-500">→ demonstrate / illustrate / reveal / suggest / imply / display</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">think / believe</p>
        <p class="text-xs text-gray-500">→ argue / claim / assume / hold the view / be convinced / maintain</p>
      </div>
      <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
        <p class="font-medium text-gray-900 dark:text-white">emphasize</p>
        <p class="text-xs text-gray-500">→ highlight / stress / underline / point out / draw attention to</p>
      </div>
    </div>
    <div class="mb-6 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      <p><strong>进阶提醒：</strong>六级同义替换常常伴随词性转换——动词变名词（facilitate → facilitation）、形容词变名词（sustainable → sustainability）、主动变被动（We must promote... → ...must be promoted）。做题时不能只看词形，要看语义内核。</p>
    </div>

    <!-- ===== 长难句拆解 ===== -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      长难句拆解训练
    </h3>
    <p class="mb-3 text-sm">
      六级阅读长难句的核心解法：<strong>拆解→定位→匹配</strong>。不需要逐词翻译，只需要快速抓主干。
    </p>
    <div class="mb-6 grid gap-4 sm:grid-cols-3">
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h5 class="mb-2 font-medium text-gray-900 dark:text-white">Step 1：抓主干</h5>
        <p class="text-sm">先找主语→谓语→宾语，忽略所有插入语、介词短语、非谓语修饰。从句用括号括起来先跳过。</p>
        <div class="mt-2 rounded bg-gray-50 p-2 text-xs dark:bg-gray-700">
          <p class="text-gray-400 line-through">The study which focuses on ecological protection in developing countries since 2010</p>
          <p class="font-medium text-gray-900 dark:text-white">indicates that sustainable development is indispensable.</p>
        </div>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h5 class="mb-2 font-medium text-gray-900 dark:text-white">Step 2：拆从句</h5>
        <p class="text-sm">that/which 引导的定语从句修饰先行词；when/if/because 引导的状语从句表示时间/条件/原因。拆开后逐个理解。</p>
        <div class="mt-2 rounded bg-gray-50 p-2 text-xs dark:bg-gray-700">
          <p>The study <span class="text-blue-600 dark:text-blue-400">[which focuses on ecology]</span> indicates <span class="text-green-600 dark:text-green-400">[that development is key]</span>.</p>
        </div>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h5 class="mb-2 font-medium text-gray-900 dark:text-white">Step 3：匹配替换</h5>
        <p class="text-sm">在主干和从句中寻找题干关键词的同义替换，不纠结生僻词。</p>
        <div class="mt-2 rounded bg-gray-50 p-2 text-xs dark:bg-gray-700">
          <p>题干：improve efficiency</p>
          <p class="text-green-600 dark:text-green-400">原文：optimize operational effectiveness ✓</p>
        </div>
      </div>
    </div>

    <!-- ===== 30天训练计划 ===== -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      30 天阅读训练计划
    </h3>
    <p class="mb-2 text-sm">
      以下为 30 天备考计划，每天阅读投入 <strong>1-1.5 小时</strong>。如果你的备考时间<strong>超过 30 天</strong>，建议<strong>延长基础期和强化期</strong>——基础期加长到 10-14 天打好词汇和长难句底子，强化期加长到 10-14 天把正确率稳步提升到 70%+，提速期和冲刺期各保持 7-10 天即可。基础打牢最重要，不要急于刷题。
    </p>
    <div class="mb-4 rounded-lg bg-indigo-50 p-4 text-sm text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      <p><strong>备考期 &gt; 30 天调整方案：</strong>基础期 10-14 天 → 强化期 10-14 天 → 提速期 7-10 天 → 冲刺期 7-10 天。总时长弹性扩展，关键是基础期要把词汇和长难句底子打牢。</p>
    </div>
    <div class="mb-6 overflow-x-auto">
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
            <td class="px-4 py-3">每天 1 篇仔细阅读精析（三步法）+ 拆解 5 个长难句 + 积累 15 组同义替换</td>
            <td class="px-4 py-3">打基础：练精析习惯，建同义替换库</td>
          </tr>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">强化期</span>
            </td>
            <td class="px-4 py-3">Day 8-14</td>
            <td class="px-4 py-3">每天 1 篇仔细阅读 + 1 篇长篇匹配精析 + 选词填词词性训练 10 分钟</td>
            <td class="px-4 py-3">全题型覆盖，正确率提升到 65%+</td>
          </tr>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">提速期</span>
            </td>
            <td class="px-4 py-3">Day 15-21</td>
            <td class="px-4 py-3">每天 1 套阅读完整模拟（严格 40 分钟计时）+ 错题精析 + 长难句提速训练</td>
            <td class="px-4 py-3">练时间分配，定位速度达到 5 秒内</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">
              <span class="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/50 dark:text-red-300">冲刺期</span>
            </td>
            <td class="px-4 py-3">Day 22-30</td>
            <td class="px-4 py-3">每 2 天 1 套全真模拟 + 逐题精析 + 回顾错题本和同义替换库</td>
            <td class="px-4 py-3">查漏补缺，稳定心态</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ===== 常见误区 ===== -->
    <h3 class="mb-4 mt-8 text-xl font-semibold text-black dark:text-white">
      常见误区
    </h3>
    <div class="mb-6 grid gap-3 sm:grid-cols-2">
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">只刷题不精析</p>
          <p class="text-sm text-red-600 dark:text-red-400">做 20 套只对答案 = 重复错误习惯。精析 10 套才有质的飞跃</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">逐词逐句翻译全文</p>
          <p class="text-sm text-red-600 dark:text-red-400">阅读不是翻译题，抓主干+定位+比对即可。逐词翻译只会拖死时间</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">死磕选词填空</p>
          <p class="text-sm text-red-600 dark:text-red-400">选词填空 1 题 3.55 分，仔细阅读 1 题 14.2 分。花同样的时间收益差 4 倍</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">纠结超纲生词</p>
          <p class="text-sm text-red-600 dark:text-red-400">professional 不认识没关系，跳过！定位词是关键词，不是生僻词。生僻词 90% 不影响做题</p>
        </div>
      </div>
      <div class="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-3 dark:border-red-800/30 dark:bg-red-900/20">
        <span class="mt-0.5 text-red-500 text-lg">✕</span>
        <div>
          <p class="font-medium text-red-700 dark:text-red-300">只在屏幕上练习</p>
          <p class="text-sm text-red-600 dark:text-red-400">考试是纸质试卷！屏幕阅读和纸质阅读的习惯完全不同。考前至少用纸质试卷做 5 套模拟</p>
        </div>
      </div>
    </div>

    <div class="mb-6 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      <p class="font-medium">📝 纸质练习建议</p>
      <p class="mt-1">所有练习尽量<strong>打印出来用铅笔做</strong>：勾画关键词、圈出定位句、标注段落号、在选项旁写排除理由。这种"笔尖思维"在真实考场上至关重要。考场上没有荧光笔、没有 Ctrl+F、不能缩放——只有手上那只铅笔。平时就养成铅笔标记的习惯，考试时才能条件反射般找到定位句。</p>
    </div>

  </div>
</template>
