<script lang="ts" setup>
  const personalHistoryStore = usePersonalHistoryStore()
  const { name } = personalHistoryStore
</script>

<template>
  <div>-- 履歴書 {{ name }} --</div>
</template>

<style scoped></style>
