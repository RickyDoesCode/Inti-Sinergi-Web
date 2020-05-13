<template>
  <div class="mx-50">
    <div class="hr" />
    <div class="grid grid-detail my-20">
      <order-box :title="alamat.title">
        <p class="text-gray">{{ alamat.name }}</p>
        <p
          v-for="(text, key) in alamat.detail"
          :key="key"
          class="my-6 weight-200 line-height"
        >{{ text }}</p>
      </order-box>
      <order-box :title="catatan.title">
        <p class="weight-200 font-12">{{ catatan.text }}</p>
      </order-box>
      <order-box :title="total.title">
        <table-component :items="total.detail" :sum="total.estimated" />
      </order-box>
      <div class="grid-double">
        <product-box
          v-for="(product, index) in items.products"
          :key="String(index)"
          :product="product"
          :title="items.title"
          :noTitle="index > 0"
        />
      </div>
      <div>
        <document-display :title="pribadi.title" :documents="pribadi.documents" />
        <document-display :title="pengiriman.title" :documents="pengiriman.documents" single />
      </div>
    </div>
  </div>
</template>

<script>
import OrderBox from '../atoms/OrderBox.vue';
import TableComponent from '../atoms/Table.vue';
import ProductBox from '../atoms/ProductBox.vue';
import DocumentDisplay from './DocumentDisplay.vue';

export default {
  name: 'OrderDetail',
  components: {
    OrderBox,
    ProductBox,
    TableComponent,
    DocumentDisplay,
  },
  props: {
    order: Object,
  },
  computed: {
    alamat() {
      const alamat = this.order['Alamat Pengiriman'];
      const [name, detail] = [alamat[0], alamat.slice(1)];
      return {
        title: 'Alamat Pengiriman',
        name,
        detail,
      };
    },
    catatan() {
      return {
        title: 'Catatan',
        text: this.order.Catatan,
      };
    },
    total() {
      const estimated = this.order.Total['Harga Kisaran'];
      delete this.order.Total['Harga Kisaran'];
      return {
        title: 'Total',
        detail: this.order.Total,
        estimated: {
          title: 'Harga Kisaran',
          value: estimated,
        },
      };
    },
    items() {
      return {
        title: 'Daftar Barang Pengiriman',
        products: this.order['Daftar Barang Pengiriman'],
      };
    },
    pribadi() {
      return {
        title: 'Dokumen Pribadi',
        documents: this.order['Dokumen Pribadi'],
      };
    },
    pengiriman() {
      return {
        title: 'Dokumen Pengiriman',
        documents: this.order['Dokumen Pengiriman'],
      };
    },
  },
};
</script>
