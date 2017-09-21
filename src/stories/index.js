import Vue from 'vue';

import './main.css';

import { storiesOf } from '@storybook/vue';

import MyButton from './Button.vue';

storiesOf('MyButton', module)
  .add('Button with Hi', () => ({
    components: { MyButton },
    template: '<my-button>Hi</my-button>'
  }))
  .add('Button with Hello', () => ({
    components: { MyButton },
    template: '<my-button>Hello</my-button>'
  }))
  .add('Button with rounded', () => ({
    components: { MyButton },
    template: '<my-button rounded=true>I am Rounded!!</my-button>'
  }))
  .add('Color With Hex Background Color - RED', () => ({
    components: { MyButton },
    template: '<my-button color="red">I am Rounded!!</my-button>'
  }))
  .add('Color With Hex Background Color - Blue', () => ({
    components: { MyButton },
    template: '<my-button color="#2980b9">I am Rounded!!</my-button>'
  }))
  .add('Color With Hex Background Color - Blue and Radius', () => ({
    components: { MyButton },
    template: '<my-button rounded=true color="#2980b9">I am Rounded!!</my-button>'
  }))
