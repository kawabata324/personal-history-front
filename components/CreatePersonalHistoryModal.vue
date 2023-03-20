<script lang="ts" setup>
import {Ref} from "vue";

const router = useRouter();
const personalHistoryStore = usePersonalHistoryStore;
const {name, setPersonalHistory, postPersonalHistory} = personalHistoryStore();
const inputName = ref(name);

type PostPersonalHistoryResponse = Ref<{
  uuid: string,
  name: string
}>

const onSubmit = async () => {
  const data = await postPersonalHistory(inputName.value)
  const personalHistory = data as PostPersonalHistoryResponse

  setPersonalHistory({
    id: personalHistory.value.uuid,
    name: personalHistory.value.name
  })

  router.push('/personalHistories')
}
</script>

<template>
  <input type="checkbox" id="create-personal-history-modal" class="modal-toggle"/>
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">履歴書を作る</h3>
      <p class="py-4">作成する履歴書に名前をつけてください</p>
      <input
          class="input input-bordered w-full max-w-xs"
          placeholder="ここに名前を入力する"
          type="text"
          :value="inputName"
          @change="(event) => inputName.value = event.target.value"
      >
      <div class="modal-action">
        <button class="btn" @click="onSubmit">内容を作成する</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
