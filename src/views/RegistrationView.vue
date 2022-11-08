<script setup>
import CredentialsForm from '../components/CredentialsForm.vue'
import { useStore } from 'vuex'
const store = useStore()
const register = form => {
  store.dispatch('register', form.value)
}
</script>

<template>
  <CredentialsForm typeOfAction="Register" @submit="register" />
</template>
