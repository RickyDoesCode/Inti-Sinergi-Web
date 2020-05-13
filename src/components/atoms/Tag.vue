<template>
  <p class="weight-300 font-14 px-10 py-10 mx-5 bg-gray-tag rounded"
  >{{text}}</p>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    text: String,
  },
};
</script>
