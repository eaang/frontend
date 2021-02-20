<template>
  <div>
    <div>Order no. {{ order.id }}</div>
  </div>
</template>

<script>
import orderQuery from '~/apollo/queries/order/order'

export default {
  data() {
    return {
      order: Object,
    }
  },
  apollo: {
    order: {
      prefetch: true,
      query: orderQuery,
      variables() {
        return { id: this.$route.params.slug }
      },
    },
  },
}
</script>
