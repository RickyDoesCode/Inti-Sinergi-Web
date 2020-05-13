<template>
  <div class="font-14 flex flex-col my-10">
    <div v-if="!noTitle" class="flex justify-between my-10">
      <p class="text-light-gray">{{ title }}</p>
      <p v-if="subtitle" class="text-green">{{subtitle}}</p>
    </div>
    <div :class="`border rounded ${noPadding ? '' : 'px-16 pb-10 pt-14'}
      ${noFlex ? '' : 'full-flex'} flex flex-col`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderBox',
  props: {
    title: String,
    subtitle: String,
    noTitle: Boolean,
    noPadding: Boolean,
    noFlex: Boolean,
  },
};
</script>
