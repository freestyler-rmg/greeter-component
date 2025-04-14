import { createApp } from 'vue';
import TheGreeter from './components/TheGreeter';

const GreeterComponent = {
  init(selector, props = {}) {
    const target = document.querySelector(selector);
    if (!target) {
      console.error('Greeter: Target element not found.');
      return;
    }

    const app = createApp(TheGreeter, props);
    app.mount(target);
  },
};

window.Greeter = GreeterComponent;
