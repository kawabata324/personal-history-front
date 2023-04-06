<script setup lang="ts">
  type Props = {
    handleClickPreview: () => void
  }
  defineProps<Props>()
</script>

<template>
  <button class="btn btn-primary" @click="handleClickPreview">
    <a> プレビュー </a>
  </button>
</template>
