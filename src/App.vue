<template>
  <base-container v-if="isAuth" title="Vuex">
    <FavoriteCounter></FavoriteCounter>
    <TheCounter></TheCounter>
    <button @click="addOne">Add 10</button>
  </base-container>
  <base-container title="UserAuth">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import FavoriteCounter from './components/FavoriteCounter';
import UserAuth from './components/UserAuth';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteCounter,
    UserAuth
  },
  //   computed() {
  //     this.$store.state.counter;
  //   },
  methods: {
    addOne() {
      //   this.$store.commit('increaser');
      //   this.$store.commit({ type: 'increment', value: 10 });
      this.$store.dispatch('increment', { value: 10 }); // dispatch - using actions
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
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
