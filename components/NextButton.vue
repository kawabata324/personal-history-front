<script setup lang="ts">
  type Props = {
    handleClickNext: () => void
  }
  defineProps<Props>()
</script>

<template>
  <button class="btn" @click="handleClickNext">次へ</button>
</template>
