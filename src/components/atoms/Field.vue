<template>
  <div :style="field.half ? '':'grid-column-end: span 2'">
    <p class="font-15">{{field.name}}</p>
    <input-component
      v-if="field.type == 'input'"
      :selector="field['v-model']"
      :text="field.name"
      :prefix="field.prefix"
    />
    <date-picker v-else-if="field.type == 'date'" :field="field['v-model']" />
    <selectable-component v-else :options="field.options" :field="field['v-model']"
    />
  </div>
</template>

<script>
import DatePicker from './DatePicker.vue';
import InputComponent from './Input.vue';
import SelectableComponent from './Selectable.vue';

export default {
  name: 'Field',
  props: {
    field: Object,
  },
  components: {
    DatePicker,
    InputComponent,
    SelectableComponent,
  },
};
</script>
