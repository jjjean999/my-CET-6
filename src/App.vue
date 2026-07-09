<template>
  <TheHeader />
  <!-- <div class="flex flex-1 overflow-hidden bg-gray-50 pt-16 dark:bg-gray-900">
    <div
      class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white"
    />
  </div> -->
  <div class="flex flex-1 overflow-hidden py-16 leading-8" style="background-color: #FFFAF5; color: #333;">
    <div class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto dark:bg-gray-900 dark:text-white" style="background-color: #FFFAF5;">
      <RouterView />
    </div>
  </div>

  <TheFooter />

  <!-- 返回首页浮动按钮 -->
  <router-link
    to="/"
    title="返回首页"
    class="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl active:translate-y-0 dark:bg-primary-500 dark:hover:bg-primary-600"
  >
    <div i-carbon-home />
  </router-link>
</template>
