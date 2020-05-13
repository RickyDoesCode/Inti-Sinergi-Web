<template>
  <rounded-box>
    <div class="flex justify-between mx-30">
      <div class="flex items-center">
      <p class="mr-10">Filter ({{$store.getters.getFiltered.length}})</p>
        <tag-component v-for="(value, key) in tags"
          :key="key" :text="`${key} : ${value}`"
        />
      </div>
      <img src="@/assets/images/icons/triangle-down.svg" alt="Maximize" width="20" />
    </div>
  </rounded-box>
</template>

<script>
import TagComponent from '../atoms/Tag.vue';
import RoundedBox from '../atoms/RoundedBox.vue';

export default {
  name: 'FilterMinimized',
  components: {
    RoundedBox,
    TagComponent,
  },
  data() {
    return {
      tags: [],
    };
  },
  mounted() {
    this.tags = this.$store.getters.getTags;
  },
};
</script>
