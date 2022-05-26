<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>

  <div class="flex flex-col items-center  justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">Credenciais</h1>
    <p class="text-lg text-center text-gray-800 font-regular">Guia de instalação e geração das suas credenciais</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLogged from '../../components/HeaderLogged/index.vue'

export default defineComponent({
  components: {
    HeaderLogged
  },
  setup () {
    console.log('')
  }
})
</script>

<style>

</style>
