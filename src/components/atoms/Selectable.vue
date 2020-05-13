<template>
  <fragment>
    <div class="input-mock focus-blue flex justify-between items-center"
      tabindex="-1" :ref="field" @click="toggle"
    >
        <p class="scroll">{{ display }}</p>
        <img v-if="!active"
          src="@/assets/images/icons/light-triangle-down.svg"
          alt="down" width="15"
        />
        <img v-else src="@/assets/images/icons/light-triangle-up.svg"
          alt="down" width="15"
        />
    </div>
    <div class="flex flex-col float max-height-30vh scroll"
      v-if="active"
    >
        <option-component v-for="option in options"
          :key="option" :option="option" :field="field" @hide="hide"
        />
    </div>
  </fragment>
</template>

<script>
import OptionComponent from './Option.vue';

export default {
  name: 'SelectableComponent',
  components: {
    OptionComponent,
  },
  props: {
    options: Array,
    field: String,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    hide() {
      this.active = false;
    },
  },
  computed: {
    display() {
      const text = this.$store.state.filter[this.field].value;
      if (text.length <= 6) {
        return text;
      }
      return `${text.slice(0, 6)}...`;
    },
  },
};
</script>

<style>

</style>
