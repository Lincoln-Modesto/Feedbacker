<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>

  <div class="flex flex-col items-center  justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">Credenciais</h1>
    <p class="text-lg text-center text-gray-800 font-regular">Guia de instalação e geração das suas credenciais</p>
  </div>

  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col w-4/5 max-w-6xl py-10">
      <h1 class="text-3xl font-black text-brand-darkgray">Instalação e configuração</h1>
      <p class="mt-10 text-lg text-gray-800 font-regular">
        Esta aqui é a sua chave de Api
      </p>

      <content-loader
        class="rounded"
        width="600px"
        height="50px"
        v-if="store.Global.isLoading || state.isLoading"
      />

      <div v-else class="flex py-3 pl-5 mt-2 rounded justify-between items-center bg-brand-gray w-full lg:w-1/2">
        <span> {{ store.User.currentUser.apiKey }} </span>
        <div class="flex mr-5 ml-20">
          <icon name="copy" :color="brandColors.graydark" size="24" class="cursor-pointer"/>
          <icon name="loading" :color="brandColors.graydark" size="24" class="cursor-pointer ml-3"/>
        </div>
      </div>

       <p class="mt-5 text-lg text-gray-800 font-regular">
        Coloque esse script no seu site para começar a receber feedbacks
      </p>

      <content-loader
        class="rounded"
        width="600px"
        height="50px"
        v-if="store.Global.isLoading || state.isLoading"
      />

      <div v-else class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll">
        <pre>&lt;script src="https://lincoln-modesto-feedbacker-widget.netlify.app?api_key={{ store.User.currentUser.apiKey }}"&gt;&lt;/script&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from '../../hooks/useStore'
import HeaderLogged from '../../components/HeaderLogged/index.vue'
import ContentLoader from '../../components/ContentLoader/index.vue'
import Icon from '../../components/Icon/index.vue'
import pallete from '../../assets/pallete'

export default defineComponent({
  components: {
    HeaderLogged,
    Icon,
    ContentLoader
  },
  setup () {
    const store = useStore()
    const state = reactive({
      isLoading: false
    })

    return {
      state,
      store,
      brandColors: pallete.brand
    }
  }
})
</script>

<style>

</style>
