<script setup lang="ts">
  type Props = {
    handleClickPreview: () => void
    uuid: string
  }
  defineProps<Props>()
</script>

<template>
  <button class="btn btn-primary" @click="handleClickPreview">
    <a
      :href="`http://127.0.0.1:3000/personal_histories/${uuid}/pdfs`"
      target="_blank"
    >
      プレビュー
    </a>
  </button>
</template>
