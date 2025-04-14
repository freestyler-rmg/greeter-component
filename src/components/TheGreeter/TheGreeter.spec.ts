import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import TheGreeter from './TheGreeter.vue';

describe('TheGreeter', () => {
  it('renders properly', () => {
    const wrapper = mount(TheGreeter, { props: { message: 'John Doe' } });
    expect(wrapper.text()).toContain('Click Me');
    expect(wrapper.text()).not.toContain('John Doe');
  });
  it('shows the message after clicking the button', async () => {
    const wrapper = mount(TheGreeter, { props: { message: 'John Doe' } });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.text()).toContain('John Doe');
  });
});
