import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyChild from '../MyChild.vue';

describe('MyChild.vue', () => {
  it('emite un evento con el mensaje al hacer clic en el botón', async () => {
    // Monta el componente
    const wrapper = mount(MyChild);

    // Busca el input y el botón
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    // Define el texto de prueba
    const testMessage = 'Hola, Parent!';

    // Ingresa texto en el input
    await input.setValue(testMessage);

    // Haz clic en el botón
    await button.trigger('click');

    // Comprueba que se haya emitido el evento 'send-message' con el texto ingresado
    expect(wrapper.emitted()['send-message'][0]).toEqual([testMessage]);
  });
});
