# 真题精听材料 · 文件夹说明

## 命名规范

```
音频: audio/{stage}/day{XX}-{identifier}.mp3
原文: transcripts/{stage}/day{XX}-{identifier}.txt
```

### identifier 格式

```
{year}-{month}-section-{section}-{type}{num}

year   — 真题年份，如 2020、2021、2022
month  — 真题月份，如 06（6月）、12（12月）
section — 大写字母 A/B/C
type   — conv（长对话）/ passage（短文）/ lecture（讲座）/ report（报道）
num    — 序号，从 1 开始

示例：
  2020-12-section-a-conv1   → 2020年12月 Section A Conversation 1
  2021-06-section-b-passage2 → 2021年6月  Section B Passage 2
  2021-12-section-c-lecture3 → 2021年12月 Section C Lecture 3
  2022-06-section-c-report1  → 2022年6月  Section C Report 1
```

### 完整路径示例

```
音频: public/corpus/audio/foundation/day01-2020-12-section-a-conv1.mp3
原文: public/corpus/transcripts/foundation/day01-2020-12-section-a-conv1.txt
```

## 阶段划分

| 阶段 | Day | 每天篇数 | 材料类型 |
|------|-----|---------|---------|
| foundation（基础期）| 1-7 | 1篇 | Section A 长对话（Day 7 过渡 Section B）|
| intensive（强化期）| 8-14 | 2篇 | Section B 短文 + Section C 讲座/报道 |

## 原文文件格式

每行一句英文，与音频逐句对应，便于精听逐句播放。
可选在每行后用 `//` 标注中文翻译。

```
Good morning, everyone. // 大家早上好。
Today we are going to talk about climate change. // 今天我们来讲讲气候变化。
```
