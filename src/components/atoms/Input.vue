<template>
  <div>
  <input type="text"
    class="my-10 px-10 py-5 font-15 text-light-gray focus-blue height-18"
    v-model="value"
  />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    selector: String,
    prefix: String,
  },
  data() {
    return {
      value: '',
    };
  },
  mounted() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'RESET_FILTER') {
        this.value = '';
      }
    });
  },
  watch: {
    value() {
      this.$store.dispatch('updateFilterParameter', { name: this.selector, value: this.value });
    },
  },
};
</script>
