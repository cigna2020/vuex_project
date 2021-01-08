<template>
  <p>Favorite Counter:</p>
  <h2>{{ counter }}</h2>
</template>

<script>
export default {
  computed: {
    counter() {
      //   return this.$store.getters.normalizedCounter;
      return this.$store.getters['numbers/normalizedCounter']; // use with modules
    }
  }
};
</script>
