<template>
  <fragment>
    <div v-for="(value, key) in items" :key="key" class="flex justify-between mb-12 font-13">
      <p class="weight-200">{{ key }}</p>
      <p class="weight-400">{{ value }}</p>
    </div>
    <div class="hr"></div>
        <div class="flex justify-between mt-12 font-13">
      <p class="weight-200">{{ sum.title }}</p>
      <p class="weight-400 text-gray">{{ sum.value }}</p>
    </div>
  </fragment>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    items: Object,
    sum: Object,
  },
};
</script>
