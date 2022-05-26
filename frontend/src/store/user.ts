import { reactive } from 'vue'

type user = {
  name?: string;
  email?: string
}

const state = reactive({
  currentUser: {} as user
})

export function setCurrentUser (user: any) {
  state.currentUser = user
}

export function setApiKey (apiKey: string) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}

export function cleanCurrentUser () {
  state.currentUser = {}
}

export default state
