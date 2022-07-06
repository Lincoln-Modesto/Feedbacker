import { shallowMount } from "@vue/test-utils";
import HeaderLogged from '@/components/HeaderLogged/index.vue'
import { routes } from '@/router'
import { createWebHistory, createRouter } from "vue-router";

const router  = createRouter({
  history: createWebHistory(),
  routes
})
const mockStore = { User: { currentUser: { name: '' }} }

jest.mock('../../src/hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged/>', () => {
  it('should render logged correctly', async () => {
    router.push('/')
    await router.isReady()
    mockStore.User.currentUser.name = 'Lincoln'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [ router ]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it.skip('should render 3 dots when there\'s not user logged', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [ router ]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('should render username when there\'s user logged', async () => {
    router.push('/')
    await router.isReady()
    mockStore.User.currentUser.name = 'Lincoln'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [ router ]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Lincoln (Sair)')
  })

})
