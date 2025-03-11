<template>
  <el-config-provider namespace="ep">
    <!-- 头部组件 -->
    <BaseHeader class="fixed-header" />
    <div class="main-container flex">
      <!-- 侧边栏组件 -->
      <BaseSide class="fixed-sider" />
      <div class="router-view-container" w="full" py="4">
        <!-- 路由视图 -->
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style scoped>
/* 头部样式 */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* 确保头部在其他内容之上 */
}

/* 侧边栏样式 */
.fixed-sider {
  
  top: var(--ep-menu-item-height); /* 避免与头部重叠 */
  left: 0;
  bottom: 0;
  z-index: 999; /* 确保侧边栏在其他内容之上 */
}

/* 主容器样式 */
.main-container {
  height: 100vh;
  display: flex;
}

/* 路由视图容器样式 */
.router-view-container {
  margin-top: var(--ep-menu-item-height); /* 避免与头部重叠 */
  margin-left: 侧边栏宽度; /* 避免与侧边栏重叠，需要根据实际情况修改 */
  height: calc(100vh - var(--ep-menu-item-height));
  overflow-y: auto; /* 允许垂直滚动 */
}
</style>