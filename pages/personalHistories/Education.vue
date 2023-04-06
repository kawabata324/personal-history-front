<script lang="ts" setup>
  import { Address, db } from '~/utils/db'
  import { store } from '~/utils/localforage'
  import { wait } from '~/utils/wait'
  import { updateAddress } from '~/api/updateAddress'

  definePageMeta({
    layout: 'edit-personal-history'
  })

  const { setIsEditing } = useStepsStore()
  const snackbar = useSnackbar()
  const router = useRouter()

  /* state */
  const address = ref({
    id: '',
    postalCode: '',
    content: '',
    contentKana: ''
  })

  const isSaveProcess = ref(false)
  const isCreatePdfProcess = ref(false)
  const uuid = ref('')

  // lifeCycle
  onMounted(async () => {
    setIsEditing('住所')
    uuid.value = ((await store.getItem('uuid')) as string) || ''
    address.value = (await getLatestAddress()) ?? address.value
  })

  // event
  const handleChange = async () => {
    isSaveProcess.value = true
    await db.addresses.put({
      id: uuid.value,
      postalCode: address.value.postalCode,
      content: address.value.content,
      contentKana: address.value.contentKana
    })
    await wait(2000)
    isSaveProcess.value = false
  }

  const handleClickPreview = async () => {
    isCreatePdfProcess.value = true
    await updateAddress(address.value, uuid.value, snackbar)

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
    await updateAddress(address.value, uuid.value, snackbar)
    await router.push({ path: '/personalHistory/education' })
  }

  const getLatestAddress = async () => {
    try {
      return await db.addresses.where('id').equals(uuid.value).last()
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <div>
    <h1 class="font-bold text-center mt-2">学歴を入力</h1>
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
        <!-- 学歴 -->
        <div>
          <label class="label">
            <span class="label-text">郵便番号 (-を省略して入力する)</span>
          </label>
          <div class="flex justify-center items-center gap-3">
            <input
              v-model="address.postalCode"
              name="postalCode"
              type="date"
              placeholder="1236777"
              class="input input-bordered w-full max-w-xs"
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
              v-model="address.contentKana"
              name="contentKana"
              type="text"
              placeholder="ひょうごけん こうべし ちゅうおうく はとばちょう 5-5"
              class="input input-bordered w-full max-w-xs"
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
              v-model="address.content"
              name="contentKana"
              type="text"
              placeholder="兵庫県神戸市中央区波止場町 5-5"
              class="input input-bordered w-full max-w-xs"
              @change="handleChange"
            />
          </div>
        </div>
      </div>
    </form>
    <img class="mt-5" src="/coffee.jpg" alt="coffee" />
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
