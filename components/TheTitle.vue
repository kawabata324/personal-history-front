<script setup lang="ts">
  type Props = {
    title: string
  }
  defineProps<Props>()
</script>
<template>
  <h1 class="font-bold text-center mt-2">{{ title }}</h1>
</template>
