
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';
import { createStore } from 'vuex';


describe('MyCounter.vue', () => {
  let store;
  let dispatchSpy;

  beforeEach(() => {
    // Crear un mock del store de Vuex
    store = createStore({
      modules: {
        counter: {
          namespaced: true,
          state: {
            counter: 0, // Valor inicial
          },
          mutations: {
            INCREMENT_COUNTER(state) {
              state.counter++;
            },
            DECREMENT_COUNTER(state) {
              state.counter--;
            },
          },
          actions: {
            incrementCounter: vi.fn(),
            decrementCounter: vi.fn(),
          },
        },
      },
    });
     // Espiar el metodo dispatch
     dispatchSpy = vi.spyOn(store, 'dispatch');
  });

  it('renders the initial counter value', () => {
    const wrapper = mount(MyCounter, {
      global: {
        plugins: [store], // Pasar el store al componente
      },
    });

    // Verifica que el contador inicial es 0
    expect(wrapper.text()).toContain('Counter: 0');
  });

  it('increments the counter on +1 button click', async () => {
    const wrapper = mount(MyCounter, {
      global: {
        plugins: [store],
      },
    });

    // Simular un clic en el botón de incremento
    await wrapper.find('button:nth-of-type(1)').trigger('click');

    // Verifica que se llama incrementCounter
    expect(dispatchSpy).toHaveBeenCalledWith('counter/incrementCounter');

  });

  it('decrements the counter on -1 button click', async () => {
    const wrapper = mount(MyCounter, {
      global: {
        plugins: [store],
      },
    });

    // Simular un clic en el boton de decremento
    await wrapper.find('button:nth-of-type(2)').trigger('click');

      // Verifica que se llama decrementCounter
      expect(dispatchSpy).toHaveBeenCalledWith('counter/decrementCounter');
  });
});
