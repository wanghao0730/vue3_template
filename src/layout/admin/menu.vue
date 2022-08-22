<script setup lang="ts">
import { ref } from 'vue'
//定义menu中每一项中有什么样的数据类型
interface IMenuItem {
  title: string
  icon?: string
  active?: boolean //是否选中
}

//继承子类类型数据
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

//定义一个将有外界传递过来的数据
const menus = ref<IMenu[]>([
  //根据父级的active属性 然后对应是否显示字级菜单
  {
    title: '错误页面',
    icon: 'fab fa-behance-square',
    active: true,
    children: [
      {
        title: '404页面',
        active: true
      },
      {
        title: '405页面'
      }
    ]
  },
  {
    title: '编辑器',
    icon: 'fab fa-behance-square',
    active: false,
    children: [
      {
        title: 'markdown编辑器'
      },
      {
        title: '富文本编辑器'
      }
    ]
  }
])

//重置 active的初始值
const resetMenus = () => {
  menus.value.forEach((item) => {
    item.active = false
    //子类的active也改成false这里直接点击dt标签会把里面的子项选中取消
    item.children?.forEach((cmenuItem) => (cmenuItem.active = false))
  })
}

//处理点击后选中的显示或者隐藏
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  resetMenus() //重置所有的active
  pmenu.active = true //显示当前选中的内容
}
</script>

<template>
  <div class="w-[200px] text-gray-300 p-4 menu bg-gray-800">
    <!-- brand设计 -->
    <div class="flex items-center text-gray-300 logo">
      <i class="mr-2 text-fuchsia-300 text-[25px] fas fa-robot"></i>
      <span class="text-md">后台管理系统</span>
    </div>
    <!-- /brand设计 -->
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(menu, index) of menus" :key="index">
        <!-- dt相当于每个菜单的标题 -->
        <dt @click="handle(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="text-md">{{ menu.title }}</span>
          </section>
          <section>
            <i
              class="text-xs duration-300 fas fa-angle-down"
              :class="{ 'rotate-180': menu.active }"
            ></i>
          </section>
        </dt>
        <!-- dd就是菜单的每一个子项 -->
        <dd
          v-show="menu.active"
          :class="{ active: cmenu.active }"
          v-for="(cmenu, cindex) of menu.children"
          :key="cindex"
        >
          {{ cmenu.title }}
        </dd>
      </dl>
    </div>
    <!-- /菜单 -->
  </div>
</template>

<style scoped lang="scss">
.admin {
  //菜单设计
  .left-container {
    dl {
      @apply text-sm text-gray-300;

      dt {
        @apply flex items-center justify-between mt-6 text-sm;

        section {
          @apply flex items-center cursor-pointer;

          i {
            @apply mr-2 text-xl;
          }
        }
      }
      dd {
        @apply py-3 pl-4 my-2 text-white duration-300 rounded-md bg-gray-700 cursor-pointer hover:bg-violet-300;
        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
</style>
