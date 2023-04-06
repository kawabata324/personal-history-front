<script setup lang="ts">
  import { EducationalBackground } from '~/utils/db'

  type Props = {
    backgrounds: Array<EducationalBackground>
    handleClickDelete: (background: EducationalBackground) => void
  }
  defineProps<Props>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table w-full whitespace-nowrap">
      <!-- head -->
      <thead>
        <tr>
          <th>年月</th>
          <th>詳細</th>
          <th></th>
        </tr>
      </thead>
      <!-- body -->
      <tbody>
        <tr v-for="background in backgrounds" :key="background.id">
          <td>{{ background.happenedOn }}</td>
          <td>{{ background.description }}</td>
          <td>
            <div class="dropdown dropdown-left dropdown-bottom">
              <label tabindex="0" class="m-1">
                <Icon name="ph:dots-three-outline-vertical-fill"></Icon>
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52"
              >
                <li>
                  <button @click="() => handleClickDelete(background)">
                    削除
                  </button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
