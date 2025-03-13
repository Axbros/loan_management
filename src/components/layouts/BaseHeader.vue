<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a href="/"><img class="logo" src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus Logo"></a>
      </div>
      <div class="content">
        <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
          <el-menu-item index="/">
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              ToPhon Admin
            </template>
            <el-menu-item index="2-1" :disabled="true">
              账户余额：99999
            </el-menu-item>
            <el-menu-item index="2-2">
              退出登录
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item h="full" @click="toggleDark()">
            <button class="w-full cursor-pointer border-none bg-transparent" style="height: var(--ep-menu-item-height)">
              <i inline-flex i="dark:ep-moon ep-sunny" />
            </button>
          </el-menu-item>
          <el-menu-item h="full">
            <a class="size-full flex items-center justify-center" :href="repository.url" target="_blank">
              <div i-ri-github-fill />
            </a>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { repository } from '~/../package.json'
import { toggleDark } from '~/composables'
</script>

<style lang="scss">
.el-menu-demo {
  &.ep-menu--horizontal>.ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
}

.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
}

.logo-container .logo {
  position: relative;
  height: 100%;
}

.logo-container>a {
  height: 28px;
  width: 128px;
}

.header-container {
  display: flex; /* 添加这一行，使子元素水平排列 */
  align-items: center; /* 垂直居中对齐 */
}

.header-container .content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.navbar-wrapper {
  position: relative;
  border-bottom: 1px solid var(--ep-menu-border-color);
  height: var(--header-height);
  padding: 0 12px 0 24px;
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  top: 0;
}
.ep-menu--horizontal.ep-menu {
    border-bottom:none;
}
</style>