<template>
  <div class="mx-15vw my-5vh open-sans">
    <main-header />
    <transition name="fade" appear>
      <filter-expanded v-if="$store.state.active.filter"
        @toggle="toggle" @refresh="refresh"
      />
      <filter-minimized v-else />
    </transition>
      <transition-group  name="slide" appear>
        <order-component v-for="order in orders" :key="order.nomor"
          :order="order" @remove="remove"
        />
      </transition-group>
  </div>
</template>

<script>
import MainHeader from '../molecules/MainHeader.vue';
import FilterMinimized from '../molecules/FilterMinimized.vue';
import FilterExpanded from '../molecules/FilterExpanded.vue';
import OrderComponent from '../molecules/Order.vue';

export default {
  name: 'MainWindow',
  components: {
    FilterMinimized,
    FilterExpanded,
    OrderComponent,
    MainHeader,
  },
  data() {
    return {
      orders: this.$store.state.orders,
    };
  },
  methods: {
    toggle() {
      this.$store.dispatch('toggle', { field: 'filter' });
      this.refresh();
    },
    refresh() {
      this.orders = this.$store.getters.getFiltered;
    },
    remove(nomor) {
      this.orders = this.orders.filter((order) => order.nomor !== nomor);
    },
  },
};
</script>
