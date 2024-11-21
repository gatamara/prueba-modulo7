<template>
  <section>
    <!-- Se muestra el valor actual del contador -->
    <h3>Counter: {{ counter }}</h3>

    <!-- Botones para incrementar y decrementar el contador -->
    <div class="container-btn">
      <button @click="incrementCounter">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'; // Importamos el store de Vuex
import { computed } from 'vue'; // Importamos computed de vue para  propiedades computadas

export default defineComponent({
  setup() {
    //llamo al store, para acceder al estado global de vuex
    const store = useStore();

    // Se obtiene el valor actual del contador desde el estado del módulo counter.js en el store.
    const counter = computed(() => store.state.counter.counter);

    //metodos para implementar la accion incrementar y decrementar el counter, desde el modulo cpunter.js que esta en el estado global
    const incrementCounter = () => store.dispatch('counter/incrementCounter');
    const decrementCounter = () => store.dispatch('counter/decrementCounter');

    return {
      counter,
      incrementCounter,
      decrementCounter,
    };
  },
});
</script>

<style scoped>
section {
  padding: 24px;
  background-color: aquamarine;
  border-radius: 20px;
}

h3 {
  font-size: 2rem;
  text-align: center;
}

.container-btn {
  display: flex;
  justify-content: center;
  padding: 12px;
  gap: 12px;
}

button {
  padding: 8px;
  border-radius: 4px;
  font-size: 1.5rem;
  width: 50px;
  margin: 12px 0;
  cursor: pointer;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
