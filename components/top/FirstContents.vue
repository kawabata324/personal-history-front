<script lang="ts" setup></script>

<template>
  <section class="pb-20 bg-gray-300 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
              >
                <i class="fas fa-award"></i>
              </div>
              <h6 class="text-xl font-semibold">簡単作成</h6>
              <p class="mt-2 mb-4 text-gray-600">
                サイト上で提供されるシンプルなフォームに必要事項を入力するだけで、履歴書の作成が可能です
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
              >
                <i class="fas fa-retweet"></i>
              </div>
              <h6 class="text-xl font-semibold">完全無料</h6>
              <p class="mt-2 mb-4 text-gray-600">
                本サービスは、無償でサービスを提供しています、お金がかかる心配はありません
              </p>
            </div>
          </div>
        </div>
        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
              >
                <i class="fas fa-fingerprint"></i>
              </div>
              <h6 class="text-xl font-semibold">IT特化</h6>
              <p class="mt-2 mb-4 text-gray-600">
                プログラミング言語歴などITに特化した履歴書を作成できます
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
          >
            <i class="fas fa-user-friends text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            あなたの就職をサポートします
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            履歴書は、自己アピールや経歴の証明書として採用担当者に伝えるための貴重なツールであり、自分自身を最も効果的にアピールするための重要な手段です。
          </p>
          <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            履歴書を通じて自分のスキルや経験、資格や実績をアピールし、採用担当者の興味を引くことができれば、就職成功への近道となります。
          </p>
          <!-- TODO: 履歴書新規作成のリンクにする          -->
          <label
            for="create-personal-history-modal"
            class="font-bold text-gray-800 mt-8"
          >
            履歴書を作る
          </label>
          <CreatePersonalHistoryModal />
        </div>
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
          >
            <img
              alt="..."
              src="support.jpg"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block"
                style="height: 95px; top: -94px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
              <p class="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
