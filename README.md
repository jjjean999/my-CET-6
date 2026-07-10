<p><br></p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/salvation_lies_within_IELTS_dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/salvation_lies_within_IELTS_light.svg">
  <img alt="Slogan: Salvation lies within CET-6" src="public/salvation_lies_within_IELTS_light.svg">
</picture>

<p><br></p>
<p><br></p>
<h1 align='center'>
  My <span>CET-6</span>
</h1>

<h2 align='center'>在线地址</h2>
<p align='center'>
  <a href="https://jjjean999.github.io/my-CET-6/">https://jjjean999.github.io/my-CET-6/</a>
</p>

## 概述

英语六级（CET-6）备考资料，包含词汇、语法、听力、阅读、写作等内容，支持打字练习、练习模式等多种学习方式。

- [x] 词汇练习模式（含打字练习）
- [x] 语法：新东方英语语法（视频、讲义、思维导图）
- [x] 听力：基本概念、应试技巧、听力考点词
- [x] 阅读：考点词同义替换
- [x] 写作：100 句翻译练习

## 功能展示

### 词汇

> 2026-03 增加打字练习模式，感谢 [@Tommy1109255](https://github.com/Tommy1109255)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/typing-vocabulary-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/typing-vocabulary-light.png">
  <img alt="Vocabulary Typing" src="public/screenshot/typing-vocabulary-light.png">
</picture>

词列表

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/screenshot-vocabulary-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/screenshot-vocabulary-light.png">
  <img alt="Vocabulary" src="public/screenshot/screenshot-vocabulary-light.png">
</picture>

练习模式

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/screenshot-vocabulary-training-mode-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/screenshot-vocabulary-training-mode-light.png">
  <img alt="Vocabulary Training Mode" src="public/screenshot/screenshot-vocabulary-training-mode-light.png">
</picture>

### 语法

新东方英语语法（含视频、讲义、思维导图）

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/screenshot-grammar-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/screenshot-grammar-light.png">
  <img alt="Grammar" src="public/screenshot/screenshot-grammar-light.png">
</picture>

### 听力

- 基本概念和应试技巧
- 听力考点词

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/screenshot-listening-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/screenshot-listening-light.png">
  <img alt="Listening" src="public/screenshot/screenshot-listening-light.png">
</picture>

### 阅读

- 考点词同义替换

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/screenshot-reading-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/screenshot-reading-light.png">
  <img alt="Reading" src="public/screenshot/screenshot-reading-light.png">
</picture>

### 写作

- 100 句翻译练习

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/screenshot/screenshot-writing-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="public/screenshot/screenshot-writing-light.png">
  <img alt="Writing" src="public/screenshot/screenshot-writing-light.png">
</picture>

## 开发

本项目基于 [Vitesse Lite](https://github.com/antfu/vitesse-lite) 模板开发。

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览
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

本项目的源代码基于 **frank** 的雅思备考知识库项目改写而来，在此特别感谢 frank 的原创工作与开源分享。

> 原项目（雅思备考知识库，frank）：https://github.com/hefengxian

同时感谢 [@Tommy1109255](https://github.com/Tommy1109255) 贡献的词汇打字练习模式。

## License

禁止将本项目用于任何商业目的！
