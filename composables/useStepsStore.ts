import { Ref } from 'vue'
import { DEFAULT_STEPS } from '~/constants/steps'

export type Step = {
  readonly title: string
  isEditing: boolean
  path: string
}

type StepsState = {
  steps: Array<Step>
}

export const useStepsStore = () => {
  const state = useState<StepsState>('steps_state', () => ({
    steps: DEFAULT_STEPS
  }))

  return {
    state: readonly(state),
    steps: readonly(state.value.steps),
    setIsEditing: setIsEditing(state)
  }
}

const setIsEditing = (state: Ref<StepsState>) => {
  return (title: string) =>
    (state.value.steps = state.value.steps.map((step) => {
      step.isEditing = title === step.title

      return step
    }))
}
