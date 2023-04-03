<script lang="ts" setup></script>

<template>
  <section class="pb-20 relative block bg-gray-900">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white">ロードマップ</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            現在、開発段階の機能です。リリースまで、お待ちください。
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mt-12 justify-center">
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-medal text-xl"></i>
          </div>
          <h6 class="text-xl mt-5 font-semibold text-white">AIとの融合</h6>
          <p class="mt-2 mb-4 text-gray-500">
            あなたの代わりに、AIが志望理由等を考えてくれます、AIによってあなたをサポートします
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-poll text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">
            オリジナルな履歴書の作成
          </h5>
          <p class="mt-2 mb-4 text-gray-500">
            ユーザの要望に合わせたオリジナルな履歴書を作成することができます
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">
            テンプレートの追加
          </h5>
          <p class="mt-2 mb-4 text-gray-500">
            テンプレートから素早く履歴書を作成できます
            履歴書をあまり作ったことがない方でも魅力的な履歴書になります
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
