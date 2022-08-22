<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue'

const echarts = inject('echarts')
console.log('ec', echarts)
interface ICard {
  title: string
  price: number
  icon: string
  totalTitle: string
  total: number
}

//图标的card数组
const cards = ref<ICard[]>([
  {
    title: '总人数',
    price: 23343,
    icon: 'fas fa-comments-dollar',
    totalTitle: '总人数',
    total: 3898989
  },
  {
    title: '销售额',
    price: 23343,
    icon: 'fas fa-comments-dollar',
    totalTitle: '销售总额',
    total: 3898989
  },
  {
    title: '订单数',
    price: 23343,
    icon: 'fas fa-comments-dollar',
    totalTitle: '总订单数',
    total: 3898989
  },
  {
    title: '评论数',
    price: 23343,
    icon: 'fas fa-comments-dollar',
    totalTitle: '评论数',
    total: 3898989
  }
])

//渲染echart视图
onMounted(() => {
  //需要获取到element,所以是onMounted的Hook
  let myChart1 = echarts.init(document.getElementById('myChart1'))
  let myChart2 = echarts.init(document.getElementById('myChart2'))
  // 绘制图表
  myChart1.setOption({
    title: { text: '总用户量' },
    tooltip: {},
    xAxis: {
      data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8']
    },
    yAxis: {},
    series: [
      {
        name: '用户量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
  myChart2.setOption({
    title: { text: '总用户量' },
    tooltip: {},
    xAxis: {
      data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8']
    },
    yAxis: {},
    series: [
      {
        name: '用户量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
  window.onresize = function () {
    //自适应大小
    myChart.resize()
  }
})
</script>

<template>
  <div class="admin-home">
    <div class="grid gap-3 md:grid-flow-col daily-info">
      <el-card
        class="cursor-pointer"
        shadow="hover"
        :body-style="{ padding: '20px' }"
        v-for="(card, index) of cards"
        :key="index"
      >
        <!-- card 的头部位置 -->
        <template #header>
          <div class="flex items-center justify-between">
            {{ card.title }}
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>
        <!-- card body -->
        <section class="flex items-center justify-between mt-3">
          <span class="text-2xl font-bold">${{ card.price }}</span>
          <i class="text-4xl fas fa-comments-dollar text-violet-300"></i>
        </section>
        <section class="flex justify-between mt-6 text-base">
          {{ card.totalTitle }}
          <span class="">{{ cards.total }}</span>
        </section>
      </el-card>
    </div>
    <!--图表位置 -->
    <div class="grid gap-3 p-3 mt-5 md:grid-cols-2">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>用户数据</div>
        </template>
        <div id="myChart1" class="w-full h-72"></div>
      </el-card>

      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>销售客</div>
        </template>
        <div id="myChart2" class="w-full h-72"></div>
      </el-card>
    </div>
  </div>
</template>

<style scoped></style>
