export const deleteEducationalBackground = async (
  backgroundId: number,
  uuid: string,
  snackbar: any
) => {
  const { error } = await useFetch(
    `http://127.0.0.1:3000/personal_histories/${uuid}/educational_back_grounds/${backgroundId}`,
    {
      method: 'delete'
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
}
