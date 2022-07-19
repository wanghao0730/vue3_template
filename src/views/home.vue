<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'

const validateEmail = (value: any) => {
  return /@/.test(value) ? '成功' : '失败'
}
</script>

<template>
  <div class="home-page">
    <Form>
      <Field
        name="account"
        label="账户"
        #default="{ field, errorMessage }"
        :rules="validateEmail"
        :validate-on-change="true"
      >
        <input
          type="text"
          v-bind="field"
          class="border outline-none border-violet-300 text-violet-400"
        />
        <span> {{ errorMessage }}</span>
      </Field>
    </Form>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  color: red;
}
</style>
