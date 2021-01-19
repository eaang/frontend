<template>
  <div>
    <div>gift is {{ gift.name }}</div>
    <div>quantity selected is {{ storeQuantity }}</div>
  </div>
</template>

<script>
import giftQuery from '~/apollo/queries/gift/gift'

export default {
  data() {
    return {
      gift: Object,
      quantity: 1,
    }
  },
  apollo: {
    gift: {
      prefetch: true,
      query: giftQuery,
      variables() {
        return { id: this.$route.params.slug }
      },
    },
  },
  computed: {
    storeQuantity() {
      return this.$store.state.quantity
    },
  },
}
</script>
