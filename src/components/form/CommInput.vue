<script setup lang="ts">
//在script setup 不需要像之前一样去手动从vue中导入
//解决 defineProps传递的时候没有默认值的问题利用withDeault方法
interface IInputProps {
  //是否包含提示输入
  placeHolader?: string
  modelValue: string | number
}
//利用 withDefaults对props的默认参数进行设置 会返回props
const props = withDefaults(defineProps<IInputProps>(), {
  placeHolader: '请输入内容'
  
})
//自定义事件
</script>
<template>
  <input
    type="text"
    :placeholder="props.placeHolader"
    class="input-class"
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss">
.input-class {
  @apply w-full py-1 duration-300 border border-gray-200 rounded-md outline-none placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 focus:border-white mt-6;
}
</style>
