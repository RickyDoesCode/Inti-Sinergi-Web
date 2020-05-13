<template>
  <p class="px-25 py-10 hover-darken" @click="choose">
    {{option}}
  </p>
</template>

<script>
export default {
  name: 'OptionComponent',
  props: {
    field: String,
    option: String,
  },
  methods: {
    choose() {
      const payload = { name: this.field, value: this.option };
      this.$store.dispatch('updateFilterParameter', payload);
      this.$emit('hide');
    },
  },
};
</script>
