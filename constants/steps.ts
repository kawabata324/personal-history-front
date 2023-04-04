import { Step } from '~/composables/useStepsStore'

export const DEFAULT_STEPS: Array<Step> = [
  {
    title: 'プロフィール',
    isEditing: false,
    path: '/personalHistories/profile'
  },
  {
    title: '住所',
    isEditing: false,
    path: '/personalHistories/address'
  },
  {
    title: '学歴',
    isEditing: false,
    path: '/personalHistories/educational'
  },
  {
    title: '免許・資格等',
    isEditing: false,
    path: '/personalHistories/license'
  },
  {
    title: 'プログラミング歴',
    isEditing: false,
    path: '/personalHistories/programing'
  },
  {
    title: 'インターン歴',
    isEditing: false,
    path: '/personalHistories/intern'
  },
  {
    title: '自己PR',
    isEditing: false,
    path: '/personalHistories/selfContent'
  }
]
