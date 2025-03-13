<template>
  <el-config-provider namespace="ep">
    <!-- 头部组件 -->
    <el-container>
      <el-header>
        <BaseHeader />
      </el-header>

      <el-container>
        <div class="main-container flex">
          <!-- 侧边栏组件 -->
          <el-aside >
            <BaseSide />
          </el-aside>
          <el-container>
            <el-main>
              <div class="router-view-container" w="full" >
                <!-- 路由视图 -->
                <RouterView />
              </div>
            </el-main>
          </el-container>
        </div>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts">

import { RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
  width: 100%;
}

</style>