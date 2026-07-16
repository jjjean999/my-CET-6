<p><br></p>

<p><br></p>
<h1 align='center'>
  My <span>CET-6</span>
</h1>

<h2 align='center'>在线地址</h2>
<p align='center'>
  <a href="https://jjjean999.github.io/my-CET-6/">https://jjjean999.github.io/my-CET-6/</a>
</p>

## 项目简介

一个面向 **大学英语六级（CET-6）** 的在线备考资料站，把词汇、听力、阅读、写作、翻译等各题型的**方法论 + 真题训练**整合到一个网页里。内容以「精析」为核心思路：不只是刷题，而是帮你建立同义替换库、熟悉干扰项套路、掌握时间分配——做 10 套精析胜过做 20 套只对答案。

所有进度（精听打卡、错词本等）保存在浏览器本地，无需登录。

## ✨ 功能特色

- **核心词汇**：50 个 List、每 List 30 词，逻辑词群记忆法；支持**拼写自测练习模式**（自动播放发音、显隐释义/原词、仅看错词、一键拷贝错词），配套单词音频与剑桥词典跳转。
- **真题精听**：精选 CET-6 历年真题听力，按**基础期（Day 1-7）/ 强化期（Day 8-14）**编排，配合「三遍精听法」逐句精听；支持按天**打卡**（localStorage 记录），内置阶段目标与 30 天训练计划。
-  **听力考点词**：拆解 Section A/B/C 题型与分值，整理常见干扰项套路、选项预判、同义替换、信号词抓取等专项能力。
-  **阅读方法论**：「三步精读法」、同义替换专项训练、长难句拆解，配 30 天阅读训练计划与常见误区提醒。
-  **写作**：短文写作题型、评分标准（内容 + 语言双维度）、限时练习技巧。
-  **翻译真题**：2020–2025 年 CET-6 汉译英真题，按中国文化 / 科技发展 / 经济发展 / 社会生活 / 历史名胜 / 地理风光等主题分类，可一键显示/隐藏参考译文。
-  **真题模考**：写作 / 阅读 / 听力 / 选词填空 / 翻译五大题型**在线答题、即时判分**，写作与翻译提供范文/参考译文。
-  **评论区**：词库页接入 Giscus 评论区，可留言交流、互助答疑。

> 口语模块正在规划中。

## 功能展示

### 首页

![首页](public/screenshot/screenshot-home-light.png)

### 词汇


拼写自测（打字练习）模式

![词汇打字练习](public/screenshot/typing-vocabulary-light.png)

词列表

![词汇列表](public/screenshot/screenshot-vocabulary-light.png)

### 听力

真题精听：按阶段编排，配合三遍精听法逐句精听，支持按天打卡。

![听力](public/screenshot/screenshot-listening-light.png)

### 阅读

阅读方法论供上。

![阅读](public/screenshot/screenshot-reading-light.png)

### 写作

![写作](public/screenshot/screenshot-writing-light.png)

### 翻译真题

2020–2025 年 CET-6 汉译英真题，按中国文化 / 科技发展 / 经济发展 / 社会生活 / 历史名胜 / 地理风光等主题分类，可一键显示 / 隐藏参考译文。

![翻译真题](public/screenshot/screenshot-translation-light.png)

## 技术栈

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [Vitesse Lite](https://github.com/antfu/vitesse-lite) 模板（基于文件的路由、组件自动按需引入、UnoCSS 原子化 CSS）
- [Giscus](https://giscus.app/) 评论区

## 本地开发

```bash
# 安装依赖
npm install

# 开发模式（默认 http://localhost:3333）
npm run dev

# 构建
npm run build

# 预览构建产物
npm run preview
```

## 部署

### GitHub Pages（自动）

项目已配置 GitHub Actions 自动部署。推送代码到 `main` 分支后，Actions 会自动构建并将 `dist` 部署到 GitHub Pages。

在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions** 即可（无需手动维护 `gh-pages` 分支）。

### 本地部署

```bash
npm run build
```

将 `dist/` 目录部署到任意静态服务器即可。

## 致谢 / Acknowledgements

本项目的源代码基于 **frank（[@hefengxian](https://github.com/hefengxian)）** 的雅思备考知识库项目改写而来，在此特别感谢 frank 的原创工作与开源分享。

> 原项目（雅思备考知识库，frank）：https://github.com/hefengxian

同时感谢 [@Tommy1109255](https://github.com/Tommy1109255) 贡献的词汇打字练习模式。

## License

禁止将本项目用于任何商业目的！
