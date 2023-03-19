<script lang="ts" setup></script>

<template>
  <section class="relative py-20">
    <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px;"
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
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="idea.jpg"
          />
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <div
                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
            >
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">永久保存</h3>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              一度作った履歴書は失われません。あなたは履歴書を何度も書く必要はありません。
              また、一部を他の履歴書を書く際に使い回すことができます。
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <!-- TODO: 履歴書一覧のリンクにする          -->
                <a
                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                    class="font-bold text-gray-800 mt-8"
                >履歴書一覧をみる</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
