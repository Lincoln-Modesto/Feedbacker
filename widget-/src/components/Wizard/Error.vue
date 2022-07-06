<template>
  <div class="flex flex-col items-center justify-between w-full my-5">
    <icon name="atention" color="#F88676" size="70"/>

    <p class="text-xl font-black text-center w-full mt-2">
      Droga! Aconteceu algum erro.
    </p>

    <div class="flex justify-center items-center w-full mt-2">
      <button
        @click="goBack"
        class="
        flex flex-col rounded-full font-regular text-sm justify-center
        bg-brand-gray items-center px-5 py-2 cursor-pointer focus:outline-none
        ">
        Tente novamente
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../Icon/index.vue'
import { resetStore } from '../../store'

interface SetupReturn {
  goBack(): void
}

export default defineComponent({
  components: {
    Icon
  },
  setup (): SetupReturn {
    function goBack () {
      resetStore()
    }

    return {
      goBack
    }
  }
})
</script>

<style>

</style>
