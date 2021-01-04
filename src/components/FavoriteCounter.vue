<template>
  <p>Favorite Counter:</p>
  <h2>{{ counter }}</h2>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  }
};
</script>
