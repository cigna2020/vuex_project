<template>
  <h2>{{ count }}</h2>
  <button @click="addONe">Addeater</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.finalCounter;
    }
  },
  methods: {
    addONe() {
      //   this.$store.commit('increaser');
      this.$store.dispatch('increaser');
    }
  }
};
</script>
