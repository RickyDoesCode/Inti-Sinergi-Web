<template>
  <rounded-box class="hover-shadow">
    <div class="grid grid-order pl-50 pr-30 py-10">
      <div>
        <div class="flex">
          <div id="asal">
            <order-field title="Asal">
              <p class="font-14 weight-400 text-black mb-5 mt-8">{{ asal.tempat }}</p>
              <p class="weight-200 font-11">{{ asal.negara }}</p>
            </order-field>
          </div>
          <img src="@/assets/images/icons/right-arrow.svg" alt="route" class=" ml-30 mr-20" />
          <div id="tujuan">
            <order-field title="Tujuan">
              <p class="font-14 weight-400 text-black mb-5 mt-8">{{ tujuan.tempat }}</p>
              <p class="weight-200 font-11">{{ tujuan.negara }}</p>
            </order-field>
          </div>
        </div>
        <p class="my-15 text-blue font-14 hoverable" @click="toggle">
              Detail Pemesanan
              <img
                src="@/assets/images/icons/triangle-down-active.svg"
                alt="Down Arrow"
                class="mx-15 width-14"
                v-if="!this.active"
              />
              <img
                src="@/assets/images/icons/triangle-up-active.svg"
                alt="Up Arrow"
                class="mx-15 width-14"
                v-else
              />
            </p>
      </div>
      <div class="font-11 text-light-gray weight-200">
        <order-field title="Nomor Pemesanan" :text="order.nomor"
          onlyChild
        />
        <order-field title="Tipe | Kargo | Incoterms">
          <p class="font-12 text-gray">
          {{ order.tipe }}
          <span class="text-border-gray">|</span>
          {{ order.kargo }}
          <span class="text-border-gray">|</span>
          {{ order.incoterms }}
          </p>
        </order-field>
      </div>
      <div class="font-11 text-light-gray weight-200">
        <order-field title="ETA" :text="order.eta"
          onlyChild
        />
        <order-field title="Tipe Kontainer" :text="order.kontainer"
          onlyChild
        />
      </div>
      <div class="font-11 text-light-gray weight-200">
        <order-field title="Status" :text="order.status"
          customClass="weight-500 font-13 text-gray"
          onlyChild
        />
        <button-component
          text="Quotation"
          additional-text="(99)"
          color="white"
          background-color="green"
        />
      </div>
      <img
        src="@/assets/images/icons/close.svg"
        alt="close"
        class="self-center hover-enlarge"
        @click="remove"
      />
    </div>
    <transition name="expand">
      <order-detail :order="order.detail" v-if="active" />
    </transition>
  </rounded-box>
</template>

<script>
import RoundedBox from '../atoms/RoundedBox.vue';
import OrderField from '../atoms/OrderField.vue';
import OrderDetail from './OrderDetail.vue';
import ButtonComponent from '../atoms/Button.vue';

export default {
  name: 'OrderComponent',
  components: {
    RoundedBox,
    OrderField,
    OrderDetail,
    ButtonComponent,
  },
  props: {
    order: Object,
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
    remove() {
      this.$emit('remove', this.order.nomor);
    },
  },
  computed: {
    asal() {
      const [tempat, negara] = this.order.asal.split(', ');
      return {
        tempat,
        negara,
      };
    },
    tujuan() {
      const [tempat, negara] = this.order.tujuan.split(', ');
      return {
        tempat,
        negara,
      };
    },
  },
};
</script>
