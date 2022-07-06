<template>
  <div class="box animated__animated animate__fadeInUp animate__faster">
    <div
      :class="{
        'justify-between': canShowAdditionalControlAndInfo,
        'justify-end': !canShowAdditionalControlAndInfo
      }"
      class="relative w-full flex">
      <button
        v-if="canShowAdditionalControlAndInfo"
        @click="back"
        :class="{ 'invisible': canGoBack }"
        class="text-xl text-gray-800 focus:outline-none"
        :disabled="canGoBack">
          <icon name="arrow-right" :color="colors.gray['800']"/>
        </button>
        <p
          v-if="canShowAdditionalControlAndInfo"
          class="text-xl font-black text-center text-brand-main">
          {{ label }}
        </p>
        <button
          @click="() => emit('close-box')"
          class="text-xl text-gray-800 focus:outline-none">
          <icon name="close" size="14" :color="colors.gray['800']"/>
        </button>
    </div>

    <wizard/>

    <div class="text-gray-800 text-sm flex" v-if="canShowAdditionalControlAndInfo">
      <icon name="chat" class="mr-1" :color="BrandColors.graydark"/>
      widget by
      <span class="ml-1 font-bold">feedbacker </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, SetupContext } from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { brand } from '@/assets/pallete'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from 'tailwindcss/colors'
import Icon from '@/components/Icon/index.vue'
import Wizard from '@/components/Wizard/index.vue'
import { useStore } from '@/hooks/useStore'
import { useNavigation, Navigation } from '@/hooks/useNavigation'

interface SetupReturn {
  emit: SetupContext['emit'];
  canGoBack: ComputedRef<boolean>;
  label: ComputedRef<string>;
  back: Navigation['back'];
  canShowAdditionalControlAndInfo: ComputedRef<boolean>;
  BrandColors: Record<string, string>
  colors: Record<string, string>
}

export default defineComponent({
  components: {
    Icon,
    Wizard
  },
  emits: ['close-box'],
  setup (_, { emit }: SetupContext): SetupReturn {
    const store = useStore()
    const { back } = useNavigation()

    const label = computed<string>(() => {
      if (store.feedbackType === 'ISSUE') {
        return 'Reporte um problema'
      }

      if (store.feedbackType === 'IDEA') {
        return 'Nos fale a sua ideia'
      }

      if (store.feedbackType === 'OTHER') {
        return 'Abra a sua mente'
      }

      return 'O que você tem em mente?'
    })

    const canGoBack = computed<boolean>(() => {
      return store.currentComponent === 'SelectFeedbackType'
    })

    const canShowAdditionalControlAndInfo = computed<boolean>(() => {
      return store.currentComponent !== 'Sucess' && store.currentComponent !== 'Error'
    })

    return {
      emit,
      label,
      back,
      canGoBack,
      canShowAdditionalControlAndInfo,
      BrandColors: brand,
      colors
    }
  }
})
</script>

<style scoped lang="postcss">

.box{
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex items-center shadow-xl select-none flex-col;
  width: 400px;
}

</style>
