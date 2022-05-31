<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </div>

  <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">Feedbacks</h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Detalhes de todos os feedbacks recebidos
    </p>
  </div>

  <div class="flex justify-center w-full pb-20">
    <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">
      <div>
        <h1 class="text-3xl font-black text-brand-darkgray">Listagem</h1>

        <suspense>
          <template #default>
            <filters
              class="mt-8 animate__animated animate__fadeIn animated__faster"
            />
          </template>
          <template #fallback>
            <filters-loading class="mt-8" />
          </template>
        </suspense>
      </div>
      <div class="px-10 py-20 col-span-3">
        <p
          class="text-lg text-center text-gray-800 font-regular"
          v-if="state.hasErro"
        >
          Aconteceu um erro ao carregar os feedbacks
        </p>
        <p
          class="text-lg text-center text-gray-800 font-regular"
          v-if="!state.feedbacks.length && !state.isLoading"
        >
          Ainda não há nenhum feedback recebido
        </p>

        <feedback-card-loading v-if="state.isLoading" />
        <feedback-card
          v-for="(feedback, index) in state.feedbacks"
          :key="index"
          v-else
          :is-opened="index === 0"
          :feedback="feedback"
          class="mb-8"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HeaderLogged from '../../components/HeaderLogged/index.vue'
import Filters from './Filters.vue'
import FiltersLoading from './FiltersLoading.vue'
import FeedbackCard from '../../components/FeedbackCard/index.vue'
import FeedbackCardLoading from '../../components/FeedbackCard/loading.vue'

export default defineComponent({
  components: {
    HeaderLogged,
    Filters,
    FiltersLoading,
    FeedbackCardLoading,
    FeedbackCard
  },
  setup () {
    const state = reactive({
      isLoading: false,
      hasErro: false,
      feedbacks: []
    })

    return {
      state
    }
  }
})
</script>

<style></style>
