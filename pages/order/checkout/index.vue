<template>
  <div>
    <div class="w-full h-12">
      <div class="flex h-full items-center pl-6 font-semibold text-xl">
        Payment
      </div>
    </div>

    <!-- Gift Details -->

    <div class="flex px-6 space-x-3 items-center">
      <div class="w-28">
        <img
          :src="order.gift.image.url"
          alt=""
          class="w-28 h-28 object-cover rounded-lg border border-gray-200"
        />
      </div>
      <div>
        <div class="text-gray-400 text-sm">
          {{ order.gift.brand.name }}
        </div>
        <div class="text-lg">
          {{ order.gift.name }}
        </div>
        <div class="flex">
          <div class="text-purple-800">
            {{ displayPrice(order.gift.price) }}
          </div>
          <div class="text-gray-600">&nbsp;x {{ order.quantity }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'

const currencyOptions = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
}).resolvedOptions()

export default {
  data() {
    return {}
  },
  components: {
    Card,
  },
  computed: {
    order() {
      return this.$store.state.order.order
    },
  },
  methods: {
    displayPrice(x) {
      return (
        '$' +
        x.toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
  },
}
</script>
