<script lang="ts" setup></script>

<template>
  <div>
    <TheHeader />
    <div class="w-96 mx-auto">
      <BaseSteps />
      <div class="flex flex-col justify-center items-center">
        <slot />
      </div>
    </div>
    <TheFooter />
    <NuxtSnackbar />
  </div>
</template>

<style scoped></style>
