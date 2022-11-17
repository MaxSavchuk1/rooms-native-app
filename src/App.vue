<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
onBeforeMount(() => {
  store.dispatch('fetchUser')
})
</script>

<style lang="scss" scoped></style>
