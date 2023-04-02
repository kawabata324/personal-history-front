<script lang="ts" setup>
  import { db, Profile } from '~/utils/db'
  import { Ref } from 'vue'

  definePageMeta({
    layout: 'edit-personal-history'
  })

  const { setIsEditing } = useStepsStore()
  const { uuid } = usePersonalHistoryStore()

  onMounted(async () => {
    setIsEditing('プロフィール')
    const profiles: Array<Profile> = await db.profile.toArray()
    const latestProfile = profiles[profiles.length - 1]

    profile.value.firstName = latestProfile.firstName
    profile.value.lastName = latestProfile.lastName
    profile.value.firstNameKana = latestProfile.firstNameKana
    profile.value.lastNameKana = latestProfile.lastNameKana
    profile.value.email = latestProfile.email
    profile.value.birthDateOn = latestProfile.birthDateOn
    profile.value.age = latestProfile.age
    profile.value.phoneNumber = latestProfile.phoneNumber
    profile.value.sex = latestProfile.sex
  })

  const handleChange = async () => {
    isSaveProcess.value = true
    await db.profile.add({
      firstName: profile.value.firstName,
      firstNameKana: profile.value.firstNameKana,
      lastName: profile.value.lastName,
      lastNameKana: profile.value.lastNameKana,
      phoneNumber: profile.value.phoneNumber,
      email: profile.value.email,
      birthDateOn: profile.value.birthDateOn,
      age: profile.value.age,
      sex: profile.value.sex
    })
    await wait(2000)
    isSaveProcess.value = false
  }

  const handleClickNext = async () => {
    const profiles: Array<Profile> = await db.profile.toArray()
    const {
      firstName,
      firstNameKana,
      lastName,
      lastNameKana,
      email,
      phoneNumber,
      age,
      sex,
      birthDateOn
    } = profiles[profiles.length - 1]

    const { data, error } = await useFetch(
      `http://127.0.0.1:3000/personal_histories/${uuid}/profile`,
      {
        method: 'put',
        body: {
          firstName,
          firstNameKana,
          lastName,
          lastNameKana,
          email,
          phoneNumber,
          age,
          sex,
          birthDateOn
        }
      }
    )

    if (error.value) {
      console.error('エラーが発生しました')
    }
    console.log(data.value)
  }

  const profile: Ref<Profile> = ref({
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    email: '',
    phoneNumber: null,
    birthDateOn: null,
    age: null,
    sex: ''
  })

  const isSaveProcess = ref(false)

  async function wait(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms))
  }
</script>

<template>
  <div>
    <h1 class="font-bold text-center">プロフィールを入力</h1>
    <div v-if="isSaveProcess">
      <p>保存中...</p>
      <progress class="progress progress-primary w-full mt-2"></progress>
    </div>
    <hr v-else class="bg-primary w-full mt-2 h-2" />
    <form class="mt-2">
      <div class="form-control w-full max-w-xs">
        <!-- 氏名 -->
        <div>
          <label class="label">
            <span class="label-text">氏名</span>
          </label>
          <div class="flex justify-center items-center gap-3">
            <input
              v-model="profile.firstName"
              placeholder="田中"
              name="firstName"
              type="text"
              class="input input-bordered w-full max-w-xs"
              @change="handleChange"
            />
            <input
              v-model="profile.lastName"
              name="lastName"
              type="text"
              placeholder="太朗"
              class="input input-bordered w-full max-w-xs"
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
              v-model="profile.firstNameKana"
              name="firstNameKana"
              type="text"
              placeholder="たなか"
              class="input input-bordered w-full max-w-xs"
              @change="handleChange"
            />
            <input
              v-model="profile.lastNameKana"
              name="lastNameKana"
              type="text"
              placeholder="たろう"
              class="input input-bordered w-full max-w-xs"
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
              v-model="profile.email"
              name="email"
              type="text"
              placeholder="kawabata@example.com"
              class="input input-bordered w-full max-w-xs"
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
              v-model="profile.birthDateOn"
              name="birthDate"
              type="date"
              class="input input-bordered w-full max-w-xs"
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
              v-model="profile.age"
              name="age"
              type="number"
              placeholder="23"
              class="input input-bordered w-full max-w-xs"
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
              v-model="profile.phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="09011112222"
              class="input input-bordered w-full max-w-xs"
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
              v-model="profile.sex"
              name="sex"
              class="select select-bordered w-full"
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
    <div class="m-5 flex justify-between">
      <button class="btn btn-primary">
        <a
          :href="`http://127.0.0.1:3000/personal_histories/${uuid}/pdfs`"
          target="_blank"
        >
          プレビュー
        </a>
      </button>
      <button class="btn" @click="handleClickNext">次へ</button>
    </div>
  </div>
</template>

<style scoped></style>
