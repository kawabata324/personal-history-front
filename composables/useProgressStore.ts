import { Ref } from 'vue'

type ProgressState = {
  isSaving: boolean
  isCreating: boolean
}

export const useProgressStore = () => {
  const state = useState<ProgressState>('progress_state', () => ({
    isSaving: false,
    isCreating: false
  }))

  return {
    state: readonly(state),
    setIsSaving: setIsSaving(state),
    setIsCreating: setIsCreating(state)
  }
}

const setIsSaving = (state: Ref<ProgressState>) => {
  return (bool: boolean) => (state.value.isSaving = bool)
}

const setIsCreating = (state: Ref<ProgressState>) => {
  return (bool: boolean) => (state.value.isCreating = bool)
}
