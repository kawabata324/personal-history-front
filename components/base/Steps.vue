<script lang="ts" setup>
  const { steps } = useStepsStore()
</script>

<template>
  <div class="overflow-x-scroll whitespace-nowrap">
    <ul v-for="step in steps" :key="step.title" class="steps p-10">
      <li
        class="step"
        :data-content="step.isEditing ? '●' : ''"
        :class="step.isEditing ? 'step-primary' : ''"
      >
        {{ step.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
