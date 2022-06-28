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
        <span v-if="state.hasError">Erro ao carregar a apikey</span>
        <span v-else> {{ store.User.currentUser.apiKey }} </span>
        <div class="flex mr-5 ml-20" v-if="!state.hasError">
          <icon name="copy" :color="brandColors" size="24" class="cursor-pointer" @click="handleCopy"/>
          <icon name="loading" :color="brandColors" size="24" class="cursor-pointer ml-3" @click="handleGenerateApiKey"/>
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
        <span v-if="state.hasError">Erro ao carregar o script</span>
        <pre v-else>&lt;script src="https://lincoln-modesto-feedbacker-widget.netlify.app?api_key={{ store.User.currentUser.apiKey }}"&gt;&lt;/script&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import useStore from '../../hooks/useStore'
import { setApiKey } from '../../store/user'
import { useToast } from 'vue-toastification'
import HeaderLogged from '../../components/HeaderLogged/index.vue'
import ContentLoader from '../../components/ContentLoader/index.vue'
import Icon from '../../components/Icon/index.vue'
import services from '../../services'

export default defineComponent({
  components: {
    HeaderLogged,
    Icon,
    ContentLoader
  },
  setup () {
    const store = useStore()
    const toast = useToast()
    const state = reactive({
      hasError: false,
      isLoading: false
    })

    watch(() => store.User.currentUser, () => {
      if (!store.Global.isLoading && !store.User.currentUser.apiKey) {
        handleError(true)
      }
    })

    function handleError (error: boolean) {
      state.isLoading = false
      state.hasError = !!error
    }

    async function handleCopy () {
      toast.clear()

      try {
        if (store.User.currentUser.apiKey) {
          await navigator.clipboard.writeText(store.User.currentUser.apiKey)
          toast.success('Copiado')
        }
      } catch (error) {
        handleError(error)
      }
    }

    async function handleGenerateApiKey () {
      try {
        state.isLoading = true
        const { data } = await services.users.generateApiKey()
        setApiKey(data.apiKey)
        state.isLoading = false
      } catch (error) {
        handleError(error)
      }
    }

    return {
      state,
      store,
      handleGenerateApiKey,
      handleCopy,
      brandColors: '#C0BCB0'
    }
  }
})
</script>

<style>

</style>
