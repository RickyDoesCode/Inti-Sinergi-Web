<template>
  <div class="flex flex-row justify-between open-sans">
    <p class="weight-900 text-gray">Daftar Pemesanan</p>
    <div :class="$store.getters.getStyle"
      @click="toggleFilter"
    >
      <p class="weight-600 mx-5">Filter</p>
      <img
        :src="$store.getters.getArrow"
        alt="arrow" width="16" class="mx-10"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    toggleFilter() {
      this.$store.dispatch('toggle', { field: 'filter' });
    },
  },
};
</script>
