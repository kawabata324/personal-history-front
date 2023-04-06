<script setup lang="ts">
  import { Address } from '~/utils/db'

  type Props = {
    address: Address
    handleChange: () => void
  }

  type Emit = {
    (e: 'update:address', address: Props['address']): void
  }

  defineProps<Props>()
  const emits = defineEmits<Emit>()
</script>

<template>
  <form class="mt-2">
    <div class="form-control w-full max-w-xs">
      <!-- 郵便番号 -->
      <div>
        <label class="label">
          <span class="label-text">郵便番号 (-を省略して入力する)</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="address.postalCode"
            name="postalCode"
            type="text"
            placeholder="1236777"
            class="input input-bordered w-full max-w-xs"
            @input="
              ({ target }) =>
                emits('update:address', {
                  ...address,
                  postalCode: target.value
                })
            "
            @change="handleChange"
          />
        </div>
      </div>
      <!-- 住所かな -->
      <div>
        <label class="label">
          <span class="label-text">住所ふりがな</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="address.contentKana"
            name="contentKana"
            type="text"
            placeholder="ひょうごけん こうべし ちゅうおうく はとばちょう 5-5"
            class="input input-bordered w-full max-w-xs"
            @input="
              ({ target }) =>
                emits('update:address', {
                  ...address,
                  contentKana: target.value
                })
            "
            @change="handleChange"
          />
        </div>
      </div>
      <!-- 住所 -->
      <div>
        <label class="label">
          <span class="label-text">住所</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="address.content"
            name="contentKana"
            type="text"
            placeholder="兵庫県神戸市中央区波止場町 5-5"
            class="input input-bordered w-full max-w-xs"
            @input="
              ({ target }) =>
                emits('update:address', {
                  ...address,
                  content: target.value
                })
            "
            @change="handleChange"
          />
        </div>
      </div>
    </div>
  </form>
</template>
