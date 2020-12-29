<template>
  <base-container title="Vuex">
    <TheCounter></TheCounter>
    <button @click="addOne">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';

export default {
  components: {
    BaseContainer,
    TheCounter
  },
  computed() {
    this.$store.state.counter;
  },
  methods: {
    addOne() {
      //   this.$store.commit('increaser');
      this.$store.commit('increment', { value: 10 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
