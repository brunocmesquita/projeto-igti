<template>
  <v-btn color="primary" large class="mx-2" @click="event">
    <slot />
  </v-btn>
</template>

<script>
export default {
  methods: {
    event() {
      this.$emit('event');
    },
  },
};
</script>

<style></style>
