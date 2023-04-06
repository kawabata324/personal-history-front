<script setup lang="ts">
  type Props = {
    firstName: string
    lastName: string
    firstNameKana: string
    lastNameKana: string
    email: string
    phoneNumber: string
    birthDateOn: Date | null
    age: number | null
    sex: string
    handleChange: () => void
  }

  type Emits = {
    (e: 'update:firstName', firstName: string): void
    (e: 'update:lastName', lastName: string): void
    (e: 'update:firstNameKana', firstNameKana: string): void
    (e: 'update:lastNameKana', lastNameKana: string): void
    (e: 'update:email', email: string): void
    (e: 'update:phoneNumber', phoneNumber: string): void
    (e: 'update:birthDateOn', birthDateOn: string): void
    (e: 'update:age', age: number): void
    (e: 'update:sex', sex: string): void
  }

  defineProps<Props>()
  const emits = defineEmits<Emits>()
</script>

<template>
  <form class="mt-2">
    <div class="form-control w-full max-w-xs">
      <!-- 氏名 -->
      <div>
        <label class="label">
          <span class="label-text">氏名</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="firstName"
            placeholder="田中"
            type="text"
            class="input input-bordered w-full max-w-xs"
            name="firstName"
            @input="({ target }) => emits('update:firstName', target.value)"
            @change="handleChange"
          />
          <input
            :value="lastName"
            name="lastName"
            type="text"
            placeholder="太朗"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:lastName', target.value)"
            @change="handleChange"
          />
        </div>
      </div>
      <!-- ふりがな -->
      <div>
        <label class="label">
          <span class="label-text">ふりがな</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="firstNameKana"
            name="firstNameKana"
            type="text"
            placeholder="たなか"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:firstNameKana', target.value)"
            @change="handleChange"
          />
          <input
            :value="lastNameKana"
            name="lastNameKana"
            type="text"
            placeholder="たろう"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:lastNameKana', target.value)"
            @change="handleChange"
          />
        </div>
      </div>
      <!-- メール -->
      <div>
        <label class="label">
          <span class="label-text">メール</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="email"
            name="email"
            type="text"
            placeholder="kawabata@example.com"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:email', target.value)"
            @change="handleChange"
          />
        </div>
      </div>
      <!-- 生年月日 -->
      <div>
        <label class="label">
          <span class="label-text">生年月日</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="birthDateOn"
            name="birthDate"
            type="date"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:birthDateOn', target.value)"
            @change="handleChange"
          />
        </div>
      </div>
      <!-- 年齢 -->
      <div>
        <label class="label">
          <span class="label-text">年齢</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="age"
            name="age"
            type="number"
            placeholder="23"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:age', target.value)"
            @change="handleChange"
          />
        </div>
      </div>

      <!-- 電話番号 -->
      <div>
        <label class="label">
          <span class="label-text">電話番号(ハイフン無し)</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <input
            :value="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="09011112222"
            class="input input-bordered w-full max-w-xs"
            @input="({ target }) => emits('update:phoneNumber', target.value)"
            @change="handleChange"
          />
        </div>
      </div>
      <!-- 性別 -->
      <div>
        <label class="label">
          <span class="label-text">性別</span>
        </label>
        <div class="flex justify-center items-center gap-3">
          <select
            :value="sex"
            name="sex"
            class="select select-bordered w-full"
            @input="({ target }) => emits('update:sex', target.value)"
            @change="handleChange"
          >
            <option disabled selected value="">性別を選択してください</option>
            <option value="man">男性</option>
            <option value="woman">女性</option>
          </select>
        </div>
      </div>
    </div>
  </form>
</template>
