<template>
  <div>
    <top-bar />
    <main-window />
  </div>
</template>

<script>
import TopBar from './components/organisms/TopBar.vue';
import MainWindow from './components/organisms/MainWindow.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    MainWindow,
  },
};
</script>
