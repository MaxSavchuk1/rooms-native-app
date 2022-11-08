<script setup>
import CredentialsForm from '../components/CredentialsForm.vue'
import { useStore } from 'vuex'
const store = useStore()
const login = form => {
  store.dispatch('login', form.value)
}
</script>

<template>
  <CredentialsForm typeOfAction="Login" @submit="login" />
</template>
