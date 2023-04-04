<script lang="ts" setup>
  const { steps } = useStepsStore()
  const router = useRouter()
  const onClickStep = (path: string) => {
    console.log(path)
    router.push({ path: path })
  }
</script>

<template>
  <div class="overflow-x-scroll whitespace-nowrap">
    <ul v-for="step in steps" :key="step.title" class="steps p-10">
      <li
        class="step"
        :data-content="step.isEditing ? '●' : ''"
        :class="step.isEditing ? 'step-primary' : ''"
        @click="onClickStep(step.path)"
      >
        {{ step.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
