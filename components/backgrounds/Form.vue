<script setup lang="ts">
  import { EducationalBackground } from '~/utils/db'

  type Props = {
    background: EducationalBackground
    handleSubmit: () => void
  }

  type Emit = {
    (e: 'update:background', address: Props['background']): void
  }

  defineProps<Props>()
  const emits = defineEmits<Emit>()
</script>

<template>
  <div class="form-control w-full max-w-xs mx-auto">
    <!-- 日付 -->
    <div>
      <label class="label">
        <span class="label-text">日付</span>
      </label>
      <div class="flex justify-center items-center gap-3">
        <input
          :value="background.happenedOn"
          name="happenedOn"
          type="month"
          class="input input-bordered w-full max-w-xs"
          @input="
            ({ target }) =>
              emits('update:background', {
                ...background,
                happenedOn: target.value
              })
          "
        />
      </div>
    </div>
    <!-- 詳細 -->
    <div>
      <label class="label">
        <span class="label-text">詳細</span>
      </label>
      <div class="flex justify-center items-center gap-3">
        <textarea
          :value="background.description"
          name="description"
          type="text"
          placeholder="兵庫県立三宮高校卒業"
          class="input input-bordered w-full max-w-xs"
          @input="
            ({ target }) =>
              emits('update:background', {
                ...background,
                description: target.value
              })
          "
        />
      </div>
    </div>
    <button
      class="w-full btn btn-primary mt-5"
      :disabled="background.description === '' || background.happenedOn === ''"
      @click="handleSubmit"
    >
      追加
    </button>
  </div>
</template>
