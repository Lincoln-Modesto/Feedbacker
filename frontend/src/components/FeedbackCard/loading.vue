<template>
  <content-loader
  class="flex flex-col items-center rounded"
  width="100%"
  height="300px">

  <content-loader class="mt-3 rounded" width="90%" height="90px" animation-duration="2s"/>
  <content-loader class="mt-3 rounded" width="90%" height="90px" animation-duration="2.3s"/>
  <content-loader class="mt-3 rounded" width="90%" height="90px" animation-duration="2.7s"/>

  </content-loader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentLoader from '../ContentLoader/index.vue'

export default defineComponent({
  components: {
    ContentLoader
  }
  // setup () {

  // }
})
</script>
