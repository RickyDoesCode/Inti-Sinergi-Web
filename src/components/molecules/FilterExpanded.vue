<template>
  <rounded-box class="grid grid-filter px-1-10">
    <field v-for="field in fields"
      :key="field.name" :field="field"
    />
    <button-component
      text="Filter"
      @click="filter"
      color="white"
      background-color="blue"
    />
    <button-component
      text="Reset Filter"
      @click="reset"
      color="light-gray"
      background-color="white"
    />
  </rounded-box>
</template>

<script>
import fields from '@/assets/files/fields.json';
import ButtonComponent from '../atoms/Button.vue';
import RoundedBox from '../atoms/RoundedBox.vue';
import Field from '../atoms/Field.vue';

export default {
  name: 'FilterExpanded',
  components: {
    ButtonComponent,
    RoundedBox,
    Field,
  },
  data() {
    return {
      fields,
    };
  },
  methods: {
    filter() {
      this.$emit('toggle');
    },
    reset() {
      this.$store.dispatch('reset');
      this.$emit('refresh');
    },
  },
};
</script>
