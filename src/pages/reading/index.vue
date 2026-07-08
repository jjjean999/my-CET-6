<script setup>
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <!-- ===== 概述 ===== -->
    <h3 class="mb-4 text-xl font-semibold text-black dark:text-white">
      概述
    </h3>
    <div class="mb-4">
      <p>CET-6 阅读理解部分考试大纲及题型拆解</p>
      <br>
      <p class="mb-2 font-medium text-black dark:text-white">分数占比</p>
      <div class="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
        <p>CET-6 阅读占整套试卷的 <strong>35%</strong>，满分 <strong>248.5 分</strong>（总分 710 分）</p>
        <p>及格线约为 <strong>149 分</strong>（答对约 18-20 题左右）</p>
      </div>
      <ul class="ml-6 list-disc">
        <li>时限 <strong>40 分钟</strong></li>
        <li>共 <strong>30 题</strong>，分为 3 个小节（Section A / B / C）</li>
        <li>Section C 仔细阅读每题 14.2 分，是选词填空的 <strong>4 倍</strong></li>
        <li>所有文章均来自英文报刊、学术期刊、文化评论等真实语料</li>
        <li>词汇量要求约 5500-6000，长难句密度高于四级</li>
        <li>题目答案顺序与文章段落顺序<strong>基本一致</strong>（仔细阅读尤其明显）</li>
        <li>正确选项几乎都是原文的<strong>同义改写</strong>，原词重现多是干扰项</li>
      </ul>
    </div>

    <div class="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      <p class="font-medium">⚠️ 重要建议：最好用纸质试卷练习</p>
      <p class="mt-1">六级考试是纸质试卷，阅读需要在纸上勾画关键词、圈出定位句、标注段落号。在屏幕上练习会失去"笔尖定位"的手感，考试时容易不适应。建议打印真题或购买纸质真题集，用铅笔勾画，养成试卷标记的习惯。</p>
    </div>

    <!-- ===== Section A：选词填空 ===== -->
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section A — 选词填空（10 题）
    </h3>
    <ul class="mb-4 ml-6 list-disc">
      <li>1 篇文章约 250-300 词，留 10 个空</li>
      <li>从 <strong>15 个备选词</strong>中选填，每个词只用一次</li>
      <li>每题分值约 <strong>3.55 分</strong>，共占 5%（分值最低）</li>
      <li>考查：词性判断 + 词义辨析 + 上下文逻辑</li>
      <li>难度适中但性价比低，建议<strong>最后做</strong>，时间不够可以快速猜</li>
    </ul>
    <p><strong>词性预判四步法：</strong></p>
    <ul class="ml-6 list-disc">
      <li><strong>Step 1：标词性</strong> — 用 30 秒把 15 个选项按 n. / v. / adj. / adv. 快速分类（注意 -tion/-ly/-ive/-ous 等词缀）</li>
      <li><strong>Step 2：读首句</strong> — 首句不设空，快速把握文章主题</li>
      <li><strong>Step 3：看结构判词性</strong> — 每到一个空，先根据句子语法判断需要什么词性（冠词后→名词，be 动词后→形容词/分词，主语缺失→名词等）</li>
      <li><strong>Step 4：语义验证</strong> — 在对应词性的几个候选词中，结合上下文逻辑关系（因果/转折/并列/举例）选唯一答案</li>
    </ul>

    <!-- ===== Section B：长篇匹配 ===== -->
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section B — 长篇阅读 / 段落匹配（10 题）
    </h3>
    <ul class="mb-4 ml-6 list-disc">
      <li>1 篇长文章约 <strong>1200-1400 词</strong>，10-15 个段落</li>
      <li>给出 10 个句子，判断每句出自原文哪一段（段落可重复使用）</li>
      <li>每题分值约 <strong>7.1 分</strong>，共占 10%</li>
      <li>考查：快速定位 + 同义转述识别</li>
      <li>文章虽长但<strong>不需要精读</strong>，扫读定位是核心能力</li>
    </ul>
    <p><strong>答题技巧：</strong></p>
    <ul class="ml-6 list-disc">
      <li><strong>先读题，后读文</strong> — 拿到文章前先花 2-3 分钟把 10 个题干读完，圈出每个人名、数字、专有名词、合成词、独特概念词</li>
      <li><strong>划定位词</strong> — 每道题至少找出 2-3 个<strong>实词</strong>（名词优先，其次动词、形容词），这是回原文扫读的"GPS 坐标"</li>
      <li><strong>从前往后扫读</strong> — 每段只看首尾句 + 中间扫一眼有无定位词即可，不需要逐词读</li>
      <li><strong>同义转述是答案</strong> — 题目句不会照搬原文，一定是同义改写。例如题干说 "adequate sleep enhances cognitive functions"，原文可能是 "sufficient nocturnal rest is crucial for brain capabilities"</li>
      <li><strong>先易后难</strong> — 专有名词、数字、大写字母等"显眼"的定位词优先匹配，剩余题目再按逻辑推断</li>
    </ul>

    <!-- ===== Section C：仔细阅读 ===== -->
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section C — 仔细阅读（10 题）
    </h3>
    <ul class="mb-4 ml-6 list-disc">
      <li>2 篇文章，每篇 5 题，共 10 题</li>
      <li>文章每篇约 400-500 词，选自学术/社科/文化类话题</li>
      <li>每题分值约 <strong>14.2 分</strong>（分值最高！！Section A 的 4 倍）</li>
      <li>考查：细节理解、推理判断、主旨概括、作者态度</li>
      <li>性价比最高，建议<strong>优先做</strong></li>
    </ul>
    <p><strong>题干→定位→比对三步法：</strong></p>
    <ul class="ml-6 list-disc">
      <li><strong>Step 1：读题干，画关键词</strong> — 先读题干（不读选项，避免被干扰），圈出专有名词、数字、核心概念词</li>
      <li><strong>Step 2：回原文精准定位</strong> — 题文同序！第 1 题答案通常在 1-2 段，第 5 题在末尾段。用题干关键词回原文找到"定位句"（通常 1-2 句话即包含答案）</li>
      <li><strong>Step 3：选项与定位句逐词比对</strong> — 正确选项是定位句的同义改写（换词不换意），干扰项常见套路：原词重现但含义不同、张冠李戴、过度推断、绝对化表述（含 all/never/must 等）</li>
    </ul>
    <p><strong>仔细阅读加分技巧：</strong></p>
    <ul class="ml-6 list-disc">
      <li>转折处（but/however/yet/actually）后面 <strong>80% 出答案</strong></li>
      <li>递进关系（moreover/furthermore/in addition）往往包含细节题考点</li>
      <li>例证题：例子本身不重要，<strong>例子前后的观点句</strong>才是答案</li>
      <li>态度题：关注形容词和副词（positive/skeptical/cautiously optimistic），排除"indifferent"类绝对词</li>
      <li>主旨题：看首段转折处 + 各段首句 + 末段总结句</li>
    </ul>

    <!-- ===== 答题顺序 & 时间分配 ===== -->
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      答题顺序 & 时间分配
    </h3>
    <div class="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      <p><strong>推荐做题顺序：Section C 仔细阅读 → Section B 长篇匹配 → Section A 选词填空</strong></p>
      <p class="mt-1">理由：仔细阅读分值最高（14.2分/题），需要头脑最清醒时做；选词填空分值最低（3.55分/题），放最后，时间不够快速猜也不亏。</p>
    </div>
    <div class="mb-4 overflow-x-auto">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-4 py-3">题型</th>
            <th class="px-4 py-3">题数</th>
            <th class="px-4 py-3">单题分值</th>
            <th class="px-4 py-3">建议用时</th>
            <th class="px-4 py-3">策略</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-red-700 dark:text-red-300">Section C 仔细阅读</td>
            <td class="px-4 py-3">10 题</td>
            <td class="px-4 py-3 font-bold text-red-600 dark:text-red-400">14.2 分</td>
            <td class="px-4 py-3">18-20 分钟</td>
            <td class="px-4 py-3">优先做，保正确率</td>
          </tr>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-blue-700 dark:text-blue-300">Section B 长篇匹配</td>
            <td class="px-4 py-3">10 题</td>
            <td class="px-4 py-3">7.1 分</td>
            <td class="px-4 py-3">12-15 分钟</td>
            <td class="px-4 py-3">扫读定位，不做精读</td>
          </tr>
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-white">Section A 选词填空</td>
            <td class="px-4 py-3">10 题</td>
            <td class="px-4 py-3 text-gray-400">3.55 分</td>
            <td class="px-4 py-3">5-7 分钟</td>
            <td class="px-4 py-3">最后做，快速词性筛选</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <td class="px-4 py-3 font-bold text-gray-900 dark:text-white">合计</td>
            <td class="px-4 py-3">30 题</td>
            <td class="px-4 py-3">248.5 分</td>
            <td class="px-4 py-3">40 分钟</td>
            <td class="px-4 py-3">-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ===== 核心能力总结 ===== -->
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      六大核心能力总结
    </h3>
    <ol class="mb-4 ml-6 list-decimal space-y-2">
      <li><strong>同义替换敏感度</strong> — 六级阅读的核心。正确选项几乎永远不是原文原词，而是<strong>同义改写</strong>。一模一样的词出现在选项里，反而是干扰项的信号。平时做完题要把每道题的正确选项和原文定位句放到一起对比，记录替换对子（如 important → significant / crucial / vital）。</li>
      <li><strong>长难句拆解能力</strong> — 六级长难句比四级多、比四级长。遇到长句不要逐词翻译，先<strong>抓主谓宾主干</strong>，忽略插入语和冗长的介词短语，再分析从句（that/which 定语从句、when/if 状语从句）。读懂主干=读懂句子 70%。</li>
      <li><strong>关键词定位速度</strong> — 读完题干能在 5 秒内回原文找到定位段落。关键词选<strong>实词</strong>（名词优先、数字和专有名词最显眼），不要选虚词（the/of/to 等）。</li>
      <li><strong>干扰项辨识能力</strong> — 知道四个选项分别错在哪里比知道正确选项为什么对更重要。常见陷阱：原词照搬但含义偏移、张冠李戴、过度推理、绝对化用词（all/never/must）、无中生有。</li>
      <li><strong>段落结构意识</strong> — 英文文章段落通常"总-分-总"结构：首句是 topic sentence，中间展开论证/举例，末句总结或过渡。知道段落结构，就知道答案大概在哪个位置。</li>
      <li><strong>时间节奏把控</strong> — 40 分钟做 30 题，平均每题约 1 分 20 秒。但 Section C 每题应花 2 分钟，Section B 每题 1 分半，Section A 每题 30 秒即可。不要在一道题上纠结超过 2 分钟。</li>
    </ol>

    <div class="mb-6 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      <p class="font-medium">📝 再次提醒：请用纸质试卷练习</p>
      <p class="mt-1">准备一沓打印的真题 + 一支铅笔 + 一块橡皮。每做一套题就在试卷上勾画关键词、圈定位句、写段落号——这套"肌肉记忆"在考场上会帮你省出至少 3-5 分钟的宝贵时间。最后留 3 套近年真题不做任何标记，用于考前全真模拟。</p>
    </div>

  </div>
</template>
