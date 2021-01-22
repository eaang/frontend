<template>
  <div>
    <div>{{ order }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.state.order.order
    },
  },
}
</script>
