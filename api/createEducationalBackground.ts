import { EducationalBackground } from '~/utils/db'

export const createEducationalBackground = async (
  latest: EducationalBackground,
  uuid: string,
  snackbar: any
) => {
  const { data, error } = await useFetch(
    `http://127.0.0.1:3000/personal_histories/${uuid}/educational_back_grounds`,
    {
      method: 'post',
      body: {
        id: latest.backgroundId,
        description: latest.description,
        happened_on: new Date(latest.happenedOn)
      }
    }
  )
  if (error.value) {
    const errorMessages = error.value?.data.message.split(',') as string[]
    errorMessages.forEach((errorMessage) => {
      snackbar.add({
        type: 'error',
        text: errorMessage
      })
    })
    return
  }

  return data
}
