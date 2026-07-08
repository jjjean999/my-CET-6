/**
 * 真题精听材料数据
 *
 * 命名规范（文件与音频一一对应）：
 *   音频路径: public/corpus/audio/{stage}/day{XX}-{identifier}.mp3
 *   原文路径: public/corpus/transcripts/{stage}/day{XX}-{identifier}.txt
 *
 * identifier 格式: {year}-{month}-section-{section}-{type}{num}
 *   示例: 2020-12-section-a-conv1  → 2020年12月 Section A Conversation 1
 *         2021-06-section-b-passage1 → 2021年6月  Section B Passage 1
 *         2021-12-section-c-lecture2 → 2021年12月 Section C Lecture 2
 *         2022-06-section-c-report3  → 2022年6月  Section C Report 3
 *
 * Section 对应：
 *   Section A — 长对话（2篇/套），出题 8 个（每题 7.1 分）
 *   Section B — 短文篇章（2篇/套），出题 7 个（每题 7.1 分）
 *   Section C — 讲座/报道（3篇/套），出题 10 个（每题 14.2 分）
 */

export interface MaterialItem {
  /** 第几天 */
  day: number
  /** 阶段 */
  stage: 'foundation' | 'intensive'
  /** 真题年份 */
  yearLabel: string
  /** identifier（不含 day 前缀），用于拼接音频/原文路径 */
  identifier: string
  /** Section 类型 */
  sectionType: 'A' | 'B' | 'C'
  /** 显示标题，如 "Conversation 1" / "Passage 2" / "Lecture 3" */
  title: string
  /** 内容简介 */
  desc: string
  /** 题目数量 */
  questionCount: number
}

export interface DayGroup {
  day: number
  stage: 'foundation' | 'intensive'
  items: MaterialItem[]
}

// ============================================================
// 基础期 Day 1-7  (每天 1 篇 Section A 长对话)
// ============================================================
const foundationMaterials: MaterialItem[] = [
  {
    day: 1,
    stage: 'foundation',
    yearLabel: '2020年12月',
    identifier: '2020-12-section-a-conv1',
    sectionType: 'A',
    title: 'Conversation 1',
    desc: '保险理赔投诉 / 客户就洪水房屋索赔被拒与保险公司交涉',
    questionCount: 4,
  },
  {
    day: 2,
    stage: 'foundation',
    yearLabel: '2020年12月',
    identifier: '2020-12-section-a-conv2',
    sectionType: 'A',
    title: 'Conversation 2',
    desc: '科技讨论 / 对人工智能未来的乐观与担忧之争',
    questionCount: 4,
  },
  {
    day: 3,
    stage: 'foundation',
    yearLabel: '2021年6月',
    identifier: '2021-06-section-a-conv1',
    sectionType: 'A',
    title: 'Conversation 1',
    desc: '职场话题 / 离职面谈（exit interview）要不要说真话',
    questionCount: 4,
  },
  {
    day: 4,
    stage: 'foundation',
    yearLabel: '2021年6月',
    identifier: '2021-06-section-a-conv2',
    sectionType: 'A',
    title: 'Conversation 2',
    desc: '人物访谈 / 植物学家谈东南亚雨林考察与纪录片拍摄',
    questionCount: 4,
  },
  {
    day: 5,
    stage: 'foundation',
    yearLabel: '2021年12月',
    identifier: '2021-12-section-a-conv1',
    sectionType: 'A',
    title: 'Conversation 1',
    desc: '校园生活 / 同学吐槽生病、摔伤与电脑损坏的糟糕一周',
    questionCount: 4,
  },
  {
    day: 6,
    stage: 'foundation',
    yearLabel: '2021年12月',
    identifier: '2021-12-section-a-conv2',
    sectionType: 'A',
    title: 'Conversation 2',
    desc: '读书访谈 / 军事史学家转型创作未来题材小说',
    questionCount: 4,
  },
  {
    day: 7,
    stage: 'foundation',
    yearLabel: '2022年6月',
    identifier: '2022-06-section-a-conv1',
    sectionType: 'A',
    title: 'Conversation 1',
    desc: '人物访谈 / 《纽约客》撰稿人谈养育子女与培养阅读习惯',
    questionCount: 4,
  },
]

// ============================================================
// 强化期 Day 8-14 (每天 2 篇，Section B + Section C 混合)
// ============================================================
const intensiveMaterials: MaterialItem[] = [
  // Day 8
  {
    day: 8,
    stage: 'intensive',
    yearLabel: '2022年6月',
    identifier: '2022-06-section-b-passage1',
    sectionType: 'B',
    title: 'Passage 1',
    desc: '科普短文 / 人工智能发现强效新型抗生素',
    questionCount: 3,
  },
  {
    day: 8,
    stage: 'intensive',
    yearLabel: '2022年6月',
    identifier: '2022-06-section-c-lecture1',
    sectionType: 'C',
    title: 'Lecture 1',
    desc: '学术讲座 / 美国医疗体制中患者的处境与应对',
    questionCount: 3,
  },
  // Day 9
  {
    day: 9,
    stage: 'intensive',
    yearLabel: '2022年6月',
    identifier: '2022-06-section-b-passage2',
    sectionType: 'B',
    title: 'Passage 2',
    desc: '科普短文 / 识谎新研究：听声音比看表情更准',
    questionCount: 4,
  },
  {
    day: 9,
    stage: 'intensive',
    yearLabel: '2022年6月',
    identifier: '2022-06-section-c-lecture2',
    sectionType: 'C',
    title: 'Lecture 2',
    desc: '学术讲座 / 团队活力与成员持续联系的成因',
    questionCount: 3,
  },
  // Day 10
  {
    day: 10,
    stage: 'intensive',
    yearLabel: '2021年12月',
    identifier: '2021-12-section-b-passage1',
    sectionType: 'B',
    title: 'Passage 1',
    desc: '人文地理短文 / 加勒比海岛屿经济与贫富分化',
    questionCount: 3,
  },
  {
    day: 10,
    stage: 'intensive',
    yearLabel: '2021年12月',
    identifier: '2021-12-section-c-lecture1',
    sectionType: 'C',
    title: 'Lecture 1',
    desc: '学术讲座 / 与陌生人交谈对情绪的积极影响',
    questionCount: 4,
  },
  // Day 11
  {
    day: 11,
    stage: 'intensive',
    yearLabel: '2021年12月',
    identifier: '2021-12-section-b-passage2',
    sectionType: 'B',
    title: 'Passage 2',
    desc: '人文历史短文 / 可口可乐标志性玻璃瓶的百年设计史',
    questionCount: 4,
  },
  {
    day: 11,
    stage: 'intensive',
    yearLabel: '2021年12月',
    identifier: '2021-12-section-c-report1',
    sectionType: 'C',
    title: 'Report 1',
    desc: '新闻报道 / 育儿与延迟满足（棉花糖实验）',
    questionCount: 3,
  },
  // Day 12
  {
    day: 12,
    stage: 'intensive',
    yearLabel: '2021年6月',
    identifier: '2021-06-section-b-passage1',
    sectionType: 'B',
    title: 'Passage 1',
    desc: '科普短文 / 科学家使用专业术语对外行读者的负面影响',
    questionCount: 3,
  },
  {
    day: 12,
    stage: 'intensive',
    yearLabel: '2021年6月',
    identifier: '2021-06-section-c-lecture1',
    sectionType: 'C',
    title: 'Lecture 1',
    desc: '学术讲座 / 员工不满与糟糕管理者的成因（管理学）',
    questionCount: 4,
  },
  // Day 13
  {
    day: 13,
    stage: 'intensive',
    yearLabel: '2021年6月',
    identifier: '2021-06-section-b-passage2',
    sectionType: 'B',
    title: 'Passage 2',
    desc: '人文历史短文 / 1901年德州石油发现史（Spindletop）',
    questionCount: 4,
  },
  {
    day: 13,
    stage: 'intensive',
    yearLabel: '2021年6月',
    identifier: '2021-06-section-c-report1',
    sectionType: 'C',
    title: 'Report 1',
    desc: '科技报道 / 西澳大利亚矿业无人驾驶与自动化采矿',
    questionCount: 3,
  },
  // Day 14
  {
    day: 14,
    stage: 'intensive',
    yearLabel: '2020年12月',
    identifier: '2020-12-section-b-passage1',
    sectionType: 'B',
    title: 'Passage 1',
    desc: '财务规划短文 / 储蓄与财务安全（每月存20%）',
    questionCount: 3,
  },
  {
    day: 14,
    stage: 'intensive',
    yearLabel: '2020年12月',
    identifier: '2020-12-section-c-lecture1',
    sectionType: 'C',
    title: 'Lecture 1',
    desc: '学术讲座 / 精简生活与极简主义（个人仓储兴起）',
    questionCount: 3,
  },
]

// ============================================================
// 全部材料（合并）
// ============================================================
export const allMaterials: MaterialItem[] = [
  ...foundationMaterials,
  ...intensiveMaterials,
]

// ============================================================
// 按 day 分组
// ============================================================
export const dayGroups: DayGroup[] = (() => {
  const map = new Map<number, MaterialItem[]>()
  allMaterials.forEach((item) => {
    if (!map.has(item.day)) map.set(item.day, [])
    map.get(item.day)!.push(item)
  })
  return Array.from(map.entries()).map(([day, items]) => ({
    day,
    stage: items[0].stage,
    items,
  }))
})()

// ============================================================
// 根据 day 获取材料
// ============================================================
export function getMaterialsByDay(day: number): MaterialItem[] {
  return allMaterials.filter((m) => m.day === day)
}

// ============================================================
// 根据 stage 获取材料
// ============================================================
export function getMaterialsByStage(stage: 'foundation' | 'intensive'): DayGroup[] {
  return dayGroups.filter((g) => g.stage === stage)
}

// ============================================================
// 拼接音频/原文路径
// ============================================================
export function getAudioPath(item: MaterialItem): string {
  return `/corpus/audio/${item.stage}/day${String(item.day).padStart(2, '0')}-${item.identifier}.mp3`
}

export function getTranscriptPath(item: MaterialItem): string {
  return `/corpus/transcripts/${item.stage}/day${String(item.day).padStart(2, '0')}-${item.identifier}.txt`
}

// ============================================================
// Section 标签中文名
// ============================================================
export function getSectionLabel(item: MaterialItem): string {
  const sectionNames: Record<string, string> = {
    A: '长对话',
    B: '短文篇章',
    C: '讲座/报道',
  }
  return `Section ${item.sectionType} · ${sectionNames[item.sectionType]}`
}
