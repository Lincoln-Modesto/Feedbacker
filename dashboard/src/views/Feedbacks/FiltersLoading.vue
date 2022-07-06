<template>
  <content-loader
  class="items-center flex-col rounded flex"
  width="100%"
  height="200px">

    <content-loader
    class="mt-3 rounded"
    width="90%"
    height="50px"
    animationDuration="2s"/>

    <content-loader
    class="mt-3 rounded"
    width="80%"
    height="50px"
    animationDuration="2.3s"/>

    <content-loader
    class="mt-3 rounded"
    width="90%"
    height="50px"
    animationDuration="2.7s"/>

    <content-loader
    class="mt-3 rounded"
    width="90%"
    height="50px"
    animationDuration="2.9s"/>
  </content-loader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentLoader from '../../components/ContentLoader/index.vue'

export default defineComponent({
  components: {
    ContentLoader
  }
})
</script>
