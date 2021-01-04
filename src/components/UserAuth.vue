<template>
  <button @click="logIn" v-if="!isAuth">Log in</button>
  <button @click="logOut" v-if="isAuth">Log out</button>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
  //   ...mapMutations(['logIn', 'logOut'])
  methods: {
    logIn() {
      this.$store.dispatch('logIn');
    },
    logOut() {
      this.$store.dispatch('logOut');
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>
