<template>
  <order-box :title="title" subtitle="Rincian Berkas" no-flex>
    <div :class="`grid grid-document ${single ? 'grid-single': ''} mt-5 mb-15`">
      <div
        v-for="(document, index) in documents"
        :key="String(index)"
        class="font-12 weight-300 flex justify-between"
      >
        <p>{{document.nama}}</p>
        <p>
          {{document.qty}}
          <img src="@/assets/images/icons/file.svg" alt="file" />
        </p>
      </div>
    </div>
  </order-box>
</template>

<script>
import OrderBox from '../atoms/OrderBox.vue';

export default {
  name: 'DocumentDisplay',
  props: {
    title: String,
    documents: Array,
    single: Boolean,
  },
  components: {
    OrderBox,
  },
};
</script>
