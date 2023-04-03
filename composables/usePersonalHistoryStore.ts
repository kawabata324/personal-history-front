import { Ref } from 'vue'
import { store } from '~/utils/localforage'

type PersonalHistoryState = {
  uuid: string
  name: string
}

type PostPersonalHistoryResponse = Ref<{
  uuid: string
  name: string
}>

export const usePersonalHistoryStore = () => {
  const state = useState<PersonalHistoryState>(
    'personal_history_state',
    () => ({
      uuid: '',
      name: '履歴書'
    })
  )

  return {
    state: readonly(state),
    name: state.value.name,
    uuid: state.value.uuid,
    setName: setName(state),
    getName: getName(state),
    setPersonalHistory: setPersonalHistory(state),
    postPersonalHistory: postPersonalHistory(state)
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

const postPersonalHistory = (state: Ref<PersonalHistoryState>) => {
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

    const personalHistory = data as PostPersonalHistoryResponse

    state.value.name = personalHistory.value.name
    state.value.uuid = personalHistory.value.uuid
    await store.setItem('uuid', state.value.uuid)
  }
}
