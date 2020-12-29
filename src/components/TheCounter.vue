<template>
  <h2>{{ $store.state.counter }}</h2>
  <button @click="addONe">Addeater</button>
</template>

<script>
export default {
  methods: {
    addONe() {
      this.$store.commit('increaser');
    }
  }
};
</script>
