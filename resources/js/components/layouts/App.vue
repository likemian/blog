<template>

  <el-container>
      <el-header>Header</el-header>
      <el-aside width="20%">
          <el-menu :default-openeds="['1']">
              <el-submenu index="1">
                  <template #title>
                      <el-icon><Menu />导航一</el-icon>
                  </template>
                  <el-menu-item index="1-1">1.选项1</el-menu-item>
                  <el-menu-item index="1-2">1.选项2</el-menu-item>
                  <el-menu-item index="1-3">1.选项3</el-menu-item>
                  <el-menu-item index="1-4">1.选项4</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                  <template #title>
                      <el-icon>
                          <Menu />
                          导航二
                      </el-icon>
                  </template>
                  <el-menu-item index="2-1">2.选项1</el-menu-item>
                  <el-menu-item index="2-2">2.选项2</el-menu-item>
                  <el-menu-item index="2-3">2.选项3</el-menu-item>
                  <el-menu-item index="2-4">2.选项4</el-menu-item>
              </el-submenu>
          </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import {Menu, UserFilled} from "@element-plus/icons";
export default {
    components: {Menu, UserFilled}
}
</script>
<style>
  .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
  }
  .el-aside {
      background-color: #3dd5f3;
      color: #333;
      text-align: center;
      line-height: 200px;
  }
  .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
  }
  body >
  .el-container {
      margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
      line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
      line-height: 320px;
  }
</style>
