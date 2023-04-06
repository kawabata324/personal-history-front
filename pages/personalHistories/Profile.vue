<script lang="ts" setup>
  import { db, Profile } from '~/utils/db'
  import { Ref } from 'vue'
  import { store } from '~/utils/localforage'
  import { wait } from '~/utils/wait'
  import { updatePersonalHistory } from '~/api/updatePersonalHistoryProfile'
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
  const profile: Ref<Profile> = ref({
    id: '',
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    email: '',
    phoneNumber: '',
    birthDateOn: null,
    age: null,
    sex: ''
  })

  /* lifeCycle */
  onMounted(async () => {
    setIsEditing('プロフィール')
    const uuid = ((await store.getItem('uuid')) as string) || ''
    setUuid(uuid)
    profile.value = (await getLatestProfile()) ?? profile.value
  })

  /* event */
  const handleChange = async () => {
    setIsSaving(true)
    await db.profiles.put({
      id: uuid,
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
    /* NOTE: 数秒待つことで保存している感じを出す */
    await wait(2000)
    setIsSaving(false)
  }

  const handleClickPreview = async () => {
    setIsCreating(true)
    await updatePersonalHistory(profile.value, uuid, snackbar)

    await checkPersonalHistoryPdf(uuid, snackbar)
    await window.open(
      `http://127.0.0.1:3000/personal_histories/${uuid}/pdfs`,
      '_blank'
    )
    setIsCreating(false)
  }

  const handleClickNext = async () => {
    await updatePersonalHistory(profile.value, uuid, snackbar)
    await router.push({ path: '/personalHistories/address' })
  }

  const getLatestProfile = async () => {
    try {
      return await db.profiles.where('id').equals(uuid).last()
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <div>
    <TheTitle title="プロフィールを入力" />
    <ProgressBar />
    <ProfileForm :profile="profile" :handle-change="handleChange" />
    <div class="m-5 flex justify-between">
      <PreviewButton :handle-click-preview="handleClickPreview" :uuid="uuid" />
      <NextButton :handle-click-next="handleClickNext" />
    </div>
  </div>
</template>
