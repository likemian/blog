<template>

  <el-container>
      <el-header>Header</el-header>
      <el-aside width="25%">
          <el-menu :default-openeds="['1']">
              <el-submenu
                  v-for="menu in menuList"
                  :index='`${menu.id}`'
              >
                  <template #title>
                      <el-icon><Menu />{{menu.menuName}}</el-icon>
                  </template>
                  <el-menu-item
                      v-for="subMenu in menu.subMenuList"
                      :index="`${menu.id}`+'-'+`${subMenu.id}`"
                  >
                      {{subMenu.name}}
                  </el-menu-item>
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
    components: {Menu, UserFilled},
    data () {
        return {
            menuList: [
                {
                    'id': 1,
                    'menuName': '导航一',
                    'subMenuList': [
                        {id: 1, name: '选项5'},
                        {id: 2, name: '选项2'},
                        {id: 3, name: '选项3'},
                        {id: 4, name: '选项4'},
                    ]
                },
                {
                    'id': 2,
                    'menuName': '导航二',
                    'subMenuList': [
                        {id: 1, name: '选项1'},
                        {id: 2, name: '选项2'},
                        {id: 3, name: '选项3'},
                        {id: 4, name: '选项4'},
                    ]
                },
            ],
        }
    },
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
