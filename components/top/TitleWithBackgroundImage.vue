<script lang="ts" setup>
const TITLE = 'ブラウザで作れる履歴書' as const;
const CONTENTS = `ブラウザで利用可能なIT業界に特化した履歴書作成サイトです。\n
    '            簡単なフォーム入力で履歴書を作成することができます。\n
    '            作成した履歴書は、PDF形式で保存可能です。保存することで、プロフェッショナルな印象を与えるデザインや書式を維持できます。` as const;
</script>

<template>
  <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh;"
  >
    <div
        class="absolute top-0 w-full h-full bg-center bg-cover bg-[url('top-background-image.jpg')]"
    >
          <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
          ></span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              {{ TITLE }}
            </h1>
            <p class="mt-4 text-lg text-gray-300">
              {{ CONTENTS }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px;"
    >
      <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
      >
        <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
