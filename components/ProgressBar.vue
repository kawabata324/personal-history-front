<script setup lang="ts">
  import { useProgressStore } from '~/composables/useProgressStore'

  const { state } = useProgressStore()
</script>
<template>
  <div v-if="state.isSaving">
    <p>保存中...</p>
    <progress class="progress progress-primary w-full mt-2"></progress>
  </div>
  <div v-else-if="state.isCreating">
    <p>作成中...</p>
    <progress class="progress progress-primary w-full mt-2"></progress>
  </div>
  <hr v-else class="bg-primary w-full mt-2 h-2" />
</template>
