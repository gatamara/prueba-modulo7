<template>
  <div>
    <input v-model="inputText" placeholder="Escribe un mensaje" />
    <!-- emit para emitir eventos al componente padre  -->
    <button @click="$emit('send-message', inputText)">Enviar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
//variable inputText reactiva con ref
const inputText = ref('');

</script>

<style scoped>
input {
  padding: 12px;
  border-radius: 8px;
  margin-right: 12px;
}

button {
  padding: 12px;
  border-radius: 8px;
}
</style>
