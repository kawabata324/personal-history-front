<script lang="ts" setup>
  import { db, Profile } from '~/utils/db'
  import { Ref } from 'vue'
  import { store } from '~/utils/localforage'
  import { updatePersonalHistory } from '~/api/updatePersonalHistoryProfile'
  import { wait } from '~/utils/wait'

  definePageMeta({
    layout: 'edit-personal-history'
  })

  const { setIsEditing } = useStepsStore()
  const snackbar = useSnackbar()
  const router = useRouter()

  /* state */
  const profile: Ref<Profile> = ref({
    id: '',
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
  const isCreatePdfProcess = ref(false)
  const uuid = ref('')

  // lifeCycle
  onMounted(async () => {
    setIsEditing('プロフィール')
    uuid.value = ((await store.getItem('uuid')) as string) || ''
    profile.value = (await getLatestProfile()) ?? profile.value
  })

  // event
  const handleChange = async () => {
    isSaveProcess.value = true
    await db.profiles.put({
      id: uuid.value,
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

  const handleClickPreview = async () => {
    isCreatePdfProcess.value = true
    await updatePersonalHistory(profile.value, uuid.value, snackbar)

    await useFetch(
      `http://127.0.0.1:3000/personal_histories/${uuid.value}/pdfs`,
      { method: 'get' }
    )
    await window.open(
      `http://127.0.0.1:3000/personal_histories/${uuid.value}/pdfs`,
      '_blank'
    )
    isCreatePdfProcess.value = false
  }

  const handleClickNext = async () => {
    await updatePersonalHistory(profile.value, uuid.value, snackbar)
    await router.push({ path: '/personalHistories/address' })
  }

  const getLatestProfile = async () => {
    try {
      return await db.profiles.where('id').equals(uuid.value).last()
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <div>
    <h1 class="font-bold text-center mt-2">プロフィールを入力</h1>
    <div v-if="isSaveProcess">
      <p>保存中...</p>
      <progress class="progress progress-primary w-full mt-2"></progress>
    </div>
    <div v-else-if="isCreatePdfProcess">
      <p>作成中...</p>
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
      <button class="btn btn-primary" @click="handleClickPreview">
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
