<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <img class="w-full" src="@/assets/images/logo_white.png" alt="logo">
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
        @click="() => router.push({name: 'Credencials'})"
        class="py-2 px-6 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
          Credenciais
        </li>
        <li
        @click="() => router.push({name: 'Feedbacks'})"
        class="py-2 px-6 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none">
          Feedbacks
        </li>
        <li
        @click="handleLogout"
        class="py-2 px-6 font-bold bg-white text-brand-main rounded-full cursor-pointer focus:outline-none">
          {{ logoutLabel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../../hooks/useStore'
import { cleanCurrentUser } from '../../store/user'

export default defineComponent({
  setup () {
    const router = useRouter()
    const store = useStore()

    const logoutLabel = computed(() => {
      if (!store.User.currentUser.name) {
        return '...'
      }
      return `${store.User.currentUser.name} (Sair)`
    })

    function handleLogout () {
      window.localStorage.removeItem('token')
      cleanCurrentUser()
      router.push({ name: 'Home' })
    }

    return {
      router,
      logoutLabel,
      handleLogout
    }
  }
})
</script>
