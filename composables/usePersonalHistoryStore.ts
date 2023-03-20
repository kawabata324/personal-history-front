import { Ref } from 'vue'

type PersonalHistoryState = {
  id: string
  name: string
}

export const usePersonalHistoryStore = () => {
  const state = useState<PersonalHistoryState>(
    'personal_history_state',
    () => ({
      id: '',
      name: '履歴書'
    })
  )

  return {
    state: readonly(state),
    name: state.value.name,
    setName: setName(state),
    getName: getName(state),
    setPersonalHistory: setPersonalHistory(state),
    postPersonalHistory: postPersonalHistory()
  }
}

const setPersonalHistory = (state: Ref<PersonalHistoryState>) => {
  return (personalHistory: PersonalHistoryState) =>
    (state.value = personalHistory)
}
const setName = (state: Ref<PersonalHistoryState>) => {
  return (name: string) => (state.value.name = name)
}

const getName = (state: Ref<PersonalHistoryState>) => {
  return () => state.value.name
}

const postPersonalHistory = () => {
  return async (name: string) => {
    const { data, error } = await useFetch(
      'http://127.0.0.1:3000/personal_histories',
      {
        method: 'post',
        body: {
          name
        }
      }
    )

    if (!error.value) {
      console.error('エラーが発生しました')
    }

    return data
  }
}
