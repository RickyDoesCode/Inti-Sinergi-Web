<template>
  <div>
    <p class="font-11 text-light-gray weight-200 mb-8">{{title}}</p>
    <p :class="customClass || 'font-14 text-gray mb-20'" v-if="onlyChild">{{text}}</p>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'OrderField',
  props: {
    title: String,
    text: String,
    onlyChild: Boolean,
    customClass: String,
  },
};
</script>
