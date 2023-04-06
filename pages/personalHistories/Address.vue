<script lang="ts" setup>
  import { Address, db } from '~/utils/db'
  import { Ref } from 'vue'
  import { store } from '~/utils/localforage'
  import { wait } from '~/utils/wait'
  import { updateAddress } from '~/api/updateAddress'
  import { checkPersonalHistoryPdf } from '~/api/checkPersonalHistoryPdf'

  definePageMeta({
    layout: 'edit-personal-history'
  })

  /* composable */
  const snackbar = useSnackbar()
  const router = useRouter()

  /* custom composable */
  const { setIsEditing } = useStepsStore()
  const { setIsSaving, setIsCreating } = useProgressStore()
  const { uuid, setUuid } = usePersonalHistoryStore()

  /* state */
  const address: Ref<Address> = ref({
    id: '',
    postalCode: '',
    content: '',
    contentKana: ''
  })

  /* lifeCycle */
  onMounted(async () => {
    setIsEditing('住所')
    const uuid = ((await store.getItem('uuid')) as string) || ''
    setUuid(uuid)
    address.value = (await getLatestAddress()) ?? address.value
  })

  /* event */
  const handleChange = async () => {
    setIsSaving(true)
    await db.addresses.put({
      id: uuid,
      postalCode: address.value.postalCode,
      content: address.value.content,
      contentKana: address.value.contentKana
    })
    await wait(2000)
    setIsSaving(false)
  }

  const handleClickPreview = async () => {
    setIsCreating(true)
    await updateAddress(address.value, uuid, snackbar)
    await checkPersonalHistoryPdf(uuid, snackbar)
    await window.open(
      `http://127.0.0.1:3000/personal_histories/${uuid}/pdfs`,
      '_blank'
    )
    setIsCreating(false)
  }

  const handleClickNext = async () => {
    await updateAddress(address.value, uuid, snackbar)
    await router.push({ path: '/personalHistories/education' })
  }

  const getLatestAddress = async () => {
    try {
      return await db.addresses.where('id').equals(uuid).last()
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <div>
    <TheTitle title="住所を入力してください" />
    <ProgressBar />
    <AddressForm :address="address" :handle-change="handleChange" />
    <img class="mt-5" src="/coffee.jpg" alt="coffee" />
    <div class="m-5 flex justify-between">
      <PreviewButton :handle-click-preview="handleClickPreview" :uuid="uuid" />
      <NextButton :handle-click-next="handleClickNext" />
    </div>
  </div>
</template>
