<template>
  <div>
    <div>{{ order.gift.name }}</div>
    <div>{{ order.message }}</div>
    <div>{{ order.price }}</div>
    <div>{{ order.quantity }}</div>
    <div>{{ order.bg }}</div>
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
