export const checkPersonalHistoryPdf = async (uuid: string, snackbar: any) => {
  const { error } = await useFetch(
    `http://127.0.0.1:3000/personal_histories/${uuid}/pdfs`,
    {
      method: 'get'
    }
  )

  if (error.value) {
    snackbar.add({
      type: 'error',
      text: error.value?.data.message
    })
  }
}
