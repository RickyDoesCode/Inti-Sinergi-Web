<template>
  <div class="flex items-center" v-if="additionalText">
    <button :class="customClass"
      @click="click"
    >{{text}}</button>
    <p class="text-light-gray weight-500 font-12 mx-10"
    >{{additionalText}}</p>
  </div>
  <button :class="customClass" @click="click" v-else
  >{{text}}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    additionalText: String,
    color: String,
    backgroundColor: String,
  },
  data() {
    return {
      customClass: `bg-${this.backgroundColor} border-none focus-none text-${this.color}
      weight-600 font-12 my-10 px-10 py-10 height-35 self-end hover-enlarge`,
    };
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
