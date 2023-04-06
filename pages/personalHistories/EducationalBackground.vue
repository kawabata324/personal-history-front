<script lang="ts" setup>
  import { db, EducationalBackground } from '~/utils/db'
  import { Ref } from 'vue'
  import { store } from '~/utils/localforage'
  import { updateEducationalBackground } from '~/api/updateEducationalBackground'
  import { checkPersonalHistoryPdf } from '~/api/checkPersonalHistoryPdf'
  import { createEducationalBackground } from '~/api/createEducationalBackground'
  import { deleteEducationalBackground } from '~/api/deleteEducationalBackground'

  definePageMeta({
    layout: 'edit-personal-history'
  })

  /* composable */
  const snackbar = useSnackbar()
  const router = useRouter()

  /* custom composable */
  const { setIsEditing } = useStepsStore()
  const { setIsSaving, setIsCreating } = useProgressStore()
  const { state, setUuid } = usePersonalHistoryStore()

  /* state */
  const educationalBackground: Ref<EducationalBackground> = ref({
    backgroundId: undefined,
    uuid: '',
    description: '',
    happenedOn: ''
  })

  const backgrounds: Ref<Array<EducationalBackground>> = ref([])

  /* lifeCycle */
  onMounted(async () => {
    setIsEditing('学歴')
    const uuid = ((await store.getItem('uuid')) as string) || ''
    setUuid(uuid)
    backgrounds.value = (await getLatestBackgrounds()) ?? backgrounds.value
  })

  const handleSubmit = async () => {
    setIsSaving(true)
    const data: any = await createEducationalBackground(
      educationalBackground.value,
      state.value.uuid,
      snackbar
    )
    await db.educationalBackgrounds.put({
      uuid: state.value.uuid,
      description: educationalBackground.value.description,
      happenedOn: educationalBackground.value.happenedOn,
      backgroundId: data?.value.id as number
    })
    backgrounds.value = [
      ...backgrounds.value,
      { ...educationalBackground.value, backgroundId: data?.value.id as number }
    ]
    educationalBackground.value = {
      backgroundId: undefined,
      uuid: educationalBackground.value.uuid,
      description: '',
      happenedOn: ''
    }
    setIsSaving(false)
  }

  const handleClickDelete = async (background: EducationalBackground) => {
    if (!background.backgroundId) return

    await deleteEducationalBackground(
      background.backgroundId,
      state.value.uuid,
      snackbar
    )

    await db.educationalBackgrounds
      .where('backgroundId')
      .equals(background.backgroundId)
      .delete()

    backgrounds.value.forEach((bg) => {
      if (bg.backgroundId === background.backgroundId) {
        backgrounds.value.splice(backgrounds.value.indexOf(background), 1)
      }
    })
  }

  const handleClickPreview = async () => {
    setIsCreating(true)
    await checkPersonalHistoryPdf(state.value.uuid, snackbar)
    await window.open(
      `http://127.0.0.1:3000/personal_histories/${state.value.uuid}/pdfs`,
      '_blank'
    )
    setIsCreating(false)
  }

  const handleClickNext = async () => {
    await updateEducationalBackground(
      educationalBackground.value,
      state.value.uuid,
      snackbar
    )
    await router.push({ path: '/personalHistory/licenseBackground' })
  }

  const getLatestBackgrounds = async () => {
    try {
      return await db.educationalBackgrounds
        .where('uuid')
        .equals(state.value.uuid)
        .toArray()
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <div class="w-full">
    <TheTitle title="学歴を入力" />
    <ProgressBar />
    <BackgroundsForm
      v-model:background="educationalBackground"
      :handle-submit="handleSubmit"
    />
    <div class="mt-5">
      <BackgroundsPreviewTable
        :backgrounds="backgrounds"
        :handle-click-delete="handleClickDelete"
      />
    </div>
    <div class="m-5 flex justify-between">
      <PreviewButton :handle-click-preview="handleClickPreview" />
      <NextButton :handle-click-next="handleClickNext" />
    </div>
  </div>
</template>
