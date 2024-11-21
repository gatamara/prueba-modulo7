<template>
  <div class="parent">
    <h1>COMPONENTE PADRE</h1>
    <h4>Mensaje recibido: {{ message }}</h4>
    <div class="child">
      <h3>Componente hijo</h3>
      <MyChild @send-message="receiveMessage" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import MyChild from './MyChild.vue';

const message = ref('');
const receiveMessage = (msg) => {
  message.value = msg;
};

</script>

<style scoped>
.parent {
  background-color: aquamarine;
  padding: 24px;
  font-size: 1.2rem;
}

h4 {
  padding: 24px 0;
  font-size: 1.6rem;
}

.child {
  color: white;
  background-color: darkslateblue;
  padding: 24px;
  border-radius: 24px;

}
</style>
