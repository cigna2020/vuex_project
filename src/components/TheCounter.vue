<template>
  <!-- <h2>{{ count }}</h2> -->
  <h2>{{ finalCounter }}</h2>
  <!-- <button @click="addONe">Addeater</button> -->
  <button @click="increaser">Addeater</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    // using mapGetters
    // count() {
    //   return this.$store.getters.finalCounter;
    // }
    // ...mapGetters(['finalCounter']) // mapGetters return all getters from state
    ...mapGetters('numbers', ['finalCounter']) // use with modules
  },
  methods: {
    // addONe() {
    //   //   this.$store.commit('increaser');
    //   this.$store.dispatch('increaser');
    // }
    ...mapActions('numbers', ['increaser'])
  }
};
</script>
