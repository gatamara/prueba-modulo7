
import { createStore } from 'vuex' // Importamos Vuex
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'

// Mock de Vuex store
const store = createStore({
  state: {
    counter: { counter: 0 }
  },
  getters: {
    'counter/counter': state => state.counter.counter
  }
})

describe('PostsView', () => {
  it('Probando la existencia del componente o vista HomeView', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/posts',
        name: 'PostsViewVue',
        component: HomeView
      }],
    })

    router.push('/posts')
    await router.isReady()

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, store]  // Añadimos el store a los plugins globales
      }
    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })

  it('Probando la existencia del componente o vista AboutView', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/about',
        name: 'AboutView',
        component: AboutView
      }],
    })

    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router, store]  // Añadimos el store a los plugins globales
      }
    })

    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})


// describe('HomeView', () => {
//   test('Snapshot de la estructura HTML del componente HomeView', () => {
//     const wrapper = mount(HomeView)
//     expect(wrapper.html()).toMatchSnapshot()
//   })
// })

// describe('AboutView', () => {
//   test('Snapshot de la estructura HTML del componente AboutView', () => {
//     const wrapper = mount(AboutView)
//     expect(wrapper.html()).toMatchSnapshot()
//   })
// })
