import { reactive, readonly } from 'vue'

export type StoreState = {
  currentComponent: string;
  menssage: string;
  feedbackType: string;
  fingerPrint: string;
  apiKey: string;
  currentpage: string
}

const InitialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  menssage: '',
  feedbackType: '',
  fingerPrint: '',
  apiKey: '',
  currentpage: ''
}

const state = reactive<StoreState>({
  ...InitialState
})

export function setCurrentComponent (component: string): void {
  state.currentComponent = component
}

export function setMessage (message: string): void {
  state.menssage = message
}

export function setFeedbackType (type: string): void {
  state.feedbackType = type
}

export function setCurrentPage (page: string): void {
  state.currentpage = page
}

export function setApiKey (apiKey: string): void {
  state.apiKey = apiKey
}

export function setFingerPrint (fingerPrint: string): void {
  state.fingerPrint = fingerPrint
}

export function resetStore (): void {
  setCurrentComponent(InitialState.currentComponent)
  setFeedbackType(InitialState.feedbackType)
  setCurrentPage(InitialState.currentpage)
  setFingerPrint(InitialState.fingerPrint)
  setMessage(InitialState.menssage)
  setApiKey(InitialState.apiKey)
}

export default readonly(state)
