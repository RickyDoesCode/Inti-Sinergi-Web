<template>
  <selectable-component :options="options" :field="field" />
</template>

<script>
import SelectableComponent from './Selectable.vue';

export default {
  name: 'DatePicker',
  components: {
    SelectableComponent,
  },
  props: {
    field: String,
  },
  data() {
    return {
      options: [],
    };
  },
  methods: {
    getMonth(num) {
      const months = {
        1: 'Januari',
        2: 'Februari',
        3: 'Maret',
        4: 'April',
        5: 'Mei',
        6: 'Juni',
        7: 'Juli',
        8: 'Agustus',
        9: 'September',
        10: 'Oktober',
        11: 'November',
        12: 'Desember',
      };
      return months[num];
    },
    getDates() {
      const date = new Date();
      const min = {
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
      const max = {
        date: 31,
        month: 12,
        year: date.getFullYear() + 1,
      };
      const result = [];

      while (
        min.date !== max.date
        && min.month !== max.month
        && min.year !== max.year
      ) {
        result.push(`${min.date} ${this.getMonth(min.month)} ${min.year}`);
        if (min.month === 12 && min.date === 31) {
          min.date = 1;
          min.month = 1;
          min.year += 1;
        } else if (
          ([1, 3, 5, 7, 8, 10].includes(min.month) && min.date === 31)
          || min.date === 30
        ) {
          min.date = 1;
          min.month += 1;
        } else {
          min.date += 1;
        }
      }
      return result;
    },
  },
  beforeMount() {
    this.options = this.getDates();
  },
};
</script>
