<script lang="ts" setup>
  const router = useRouter()
  const { name, postPersonalHistory } = usePersonalHistoryStore()
  const inputName = ref(name)

  const onSubmit = async () => {
    await postPersonalHistory(inputName.value)
    await router.push('/personalHistories/profile')
  }
</script>

<template>
  <input
    id="create-personal-history-modal"
    type="checkbox"
    class="modal-toggle"
  />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">履歴書を作る</h3>
      <p class="py-4">作成する履歴書に名前をつけてください</p>
      <input
        class="input input-bordered w-full max-w-xs"
        placeholder="ここに名前を入力する"
        type="text"
        :value="inputName"
        @change="(event) => (inputName.value = event.target.value)"
      />
      <div class="modal-action">
        <button class="btn" @click="onSubmit">内容を作成する</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
