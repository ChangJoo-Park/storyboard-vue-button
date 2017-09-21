import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Mybutton from '../src/stories/Button.vue';

// Register custom components.
Vue.component('my-button', Mybutton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);
