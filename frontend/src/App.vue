<template>
  <modal-factory/>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'
import ModalFactory from './components/ModalFactory'

export default defineComponent({
  components: {
    ModalFactory
  }
})
</script>
