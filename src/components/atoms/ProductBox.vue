<template>
  <order-box :title="title" :no-title="noTitle" no-padding>
    <div class="grid grid-product-wrapper items-center font-13">
      <p class="text-border-gray mx-15 area-number">1</p>
      <div class="area-hr hr-thin"></div>
      <p class="mx-10 my-14 area-title">{{product.nama}}</p>
      <div class="area-item grid grid-product mx-10 mb-14">
          <p v-for="(text, index) in detail" :key="String(index)"
            :class="index % 2 == 0 ? even : odd"
          >
              {{text}}
          </p>
      </div>
    </div>
  </order-box>
</template>

<script>
import OrderBox from './OrderBox.vue';

export default {
  name: 'ProductBox',
  components: {
    OrderBox,
  },
  props: {
    product: Object,
    title: String,
    noTitle: Boolean,
  },
  data() {
    return {
      odd: 'font-12 my-8',
      even: 'text-border-gray my-8 font-12 weight-300',
    };
  },
  computed: {
    detail() {
      let result = [];
      const keys = Object.keys(this.product)
        .slice(1);
      const values = Object.values(this.product)
        .slice(1);
      for (let i = 0; i < keys.length; i += 1) {
        result = [...result, keys[i], values[i]];
      }
      return result;
    },
  },
};
</script>
