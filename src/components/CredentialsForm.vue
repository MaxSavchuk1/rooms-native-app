<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  typeOfAction: { type: String, required: true }
})
const emit = defineEmits(['submit'])
const form = ref({
  email: '',
  password: ''
})
const clickHandler = () => {
  emit('submit', form)
  // form = ???
}
</script>

<template>
  <el-form :model="form" label-width="100px">
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="clickHandler">
        {{ props.typeOfAction }}
      </el-button>
    </el-form-item>
  </el-form>
</template>
