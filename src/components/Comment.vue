<script setup lang="ts">
// 是否启用 Giscus 评论区。
// 设为 true 才真正挂载评论脚本；设为 false 仅渲染占位提示，便于先部署验证页面不破框。
// 当前临时关闭：repo-id / category-id 仍是 Timmoc 的值，需换成 jjjean999/my-CET-6 在 giscus.app 生成的值后再开。
const ENABLE_GISCUS = false

function loadGiscus() {
  if (!ENABLE_GISCUS)
    return
  // 防止重复挂载
  if (document.querySelector('script[data-giscus]'))
    return

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  // ⚠️ 注意：data-repo 必须与部署该站点的 GitHub 仓库一致（当前仓库为 jjjean999/my-CET-6）。
  // 下方的 repo-id / category-id 需到 https://giscus.app 用 jjjean999/my-CET-6 重新生成并替换。
  script.setAttribute('data-repo', 'jjjean999/my-CET-6')
  script.setAttribute('data-repo-id', 'R_kgDOOsoCxQ')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOOsoCxM4CtoDw')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('data-giscus', '')
  script.crossOrigin = 'anonymous'
  script.async = true
  document.head.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})
</script>

<template>
  <div class="mx-auto mt-8 w-full max-w-screen-2xl overflow-x-hidden px-4 2xl:px-0">
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <h3 class="mb-4 text-lg font-bold text-gray-900 dark:text-white">
        评论区
      </h3>
      <div v-if="!ENABLE_GISCUS" class="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
        评论区暂未开启
      </div>
      <div v-else class="giscus-container" />
    </div>
  </div>
</template>

<style scoped>
/* 防止 Giscus iframe 内容撑破页面布局 */
.giscus-container {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
