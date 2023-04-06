<script setup lang="ts">
  import { Profile } from '~/utils/db'

  type Props = {
    profile: Profile
    handleChange: () => void
  }

  type Emits = {
    (e: 'update:profile', Profile: Props['profile']): void
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
            :value="profile.firstName"
            placeholder="田中"
            type="text"
            class="input input-bordered w-full max-w-xs"
            name="firstName"
            @input="
              (e) =>
                emits('update:profile', {
                  ...profile,
                  firstName: e.target.value
                })
            "
            @change="handleChange"
          />
          <input
            :value="profile.lastName"
            name="lastName"
            type="text"
            placeholder="太朗"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', {
                  ...profile,
                  lastName: e.target.value
                })
            "
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
            :value="profile.firstNameKana"
            name="firstNameKana"
            type="text"
            placeholder="たなか"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', {
                  ...profile,
                  firstNameKana: e.target.value
                })
            "
            @change="handleChange"
          />
          <input
            :value="profile.lastNameKana"
            name="lastNameKana"
            type="text"
            placeholder="たろう"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', {
                  ...profile,
                  lastNameKana: e.target.value
                })
            "
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
            :value="profile.email"
            name="email"
            type="text"
            placeholder="kawabata@example.com"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', { ...profile, email: e.target.value })
            "
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
            :value="profile.birthDateOn"
            name="birthDate"
            type="date"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', {
                  ...profile,
                  birthDateOn: e.target.value
                })
            "
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
            :value="profile.age"
            name="age"
            type="number"
            placeholder="23"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', { ...profile, age: e.target.value })
            "
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
            :value="profile.phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="09011112222"
            class="input input-bordered w-full max-w-xs"
            @input="
              (e) =>
                emits('update:profile', {
                  ...profile,
                  phoneNumber: e.target.value
                })
            "
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
            :value="profile.sex"
            name="sex"
            class="select select-bordered w-full"
            @input="
              (e) =>
                emits('update:profile', { ...profile, sex: e.target.value })
            "
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
