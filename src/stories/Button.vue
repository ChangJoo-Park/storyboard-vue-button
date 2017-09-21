<template>
  <button class="button" :class="{ rounded: rounded }" :style="{ backgroundColor: color }">
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#ecf0f1'
    }
  }
}
</script>

<style type="text/css">
.button {
  border: 1px solid black;
  padding: 5px 15px;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.1s linear;
}
.button:hover {
  color: white;
  box-shadow: 5px 4px 5px 0px #9B939B;
}

.rounded {
  border-radius: 5px;
}
</style>
