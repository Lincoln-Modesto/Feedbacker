import Home from '@/views/Home/index.vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import { routes } from '@/router'
import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Home/>', () => {

  it('should render home correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper: VueWrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
