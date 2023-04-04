import { Address } from '~/utils/db'

export const updateAddress = async (
  latest: Address,
  uuid: string,
  snackbar: any
) => {
  const { error } = await useFetch(
    `http://127.0.0.1:3000/personal_histories/${uuid}/address`,
    {
      method: 'put',
      body: {
        postal_code: latest.postalCode,
        content: latest.content,
        content_kana: latest.contentKana
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
  }
}
