import { Profile } from '~/utils/db'

export const updatePersonalHistory = async (
  latest: Profile,
  uuid: string,
  snackbar: any
) => {
  const { error } = await useFetch(
    `http://127.0.0.1:3000/personal_histories/${uuid}/profile`,
    {
      method: 'put',
      body: {
        first_name: latest.firstName,
        first_name_kana: latest.firstNameKana,
        last_name: latest.lastName,
        last_name_kana: latest.lastNameKana,
        email: latest.email,
        phone_number: latest.phoneNumber,
        age: latest.age,
        sex: latest.sex,
        birth_date_on: latest.birthDateOn
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
