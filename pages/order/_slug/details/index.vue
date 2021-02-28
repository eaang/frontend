<template>
  <div class="py-6 h-screen" v-if="order.gift">
    <div class="font-bold underline text-sm mx-6 mb-6">Order Details</div>
    <div class="mb-12">
      <Orderbox
        :brand="order.gift.brand.name"
        :url="order.gift.image.url"
        :name="order.gift.name"
        :price="order.gift.price"
        :quantity="order.quantity"
      />
    </div>
    <!-- Order Details -->
    <div class="space-y-6 mx-6 font-semibold border-b border-gray-200 pb-6">
      <div class="flex justify-between">
        <div>Order number:</div>
        <div>{{ order.id }}</div>
      </div>
      <div class="flex justify-between">
        <div>Order date:</div>
        <div class="text-gray-400">{{ orderDate }}</div>
      </div>
      <div class="flex justify-between">
        <div>Order quantity:</div>
        <div class="text-gray-400">{{ order.quantity }}</div>
      </div>
      <div class="flex justify-between">
        <div>Total order amount:</div>
        <div class="text-gray-400">
          {{ displayPrice(totalAmount) }}
        </div>
      </div>
      <div class="flex justify-between">
        <div>Processing fees:</div>
        <div class="text-gray-400">
          {{ displayPrice(processingFees) }}
        </div>
      </div>
      <div class="flex justify-between">
        <div>Total price:</div>
        <div class="text-purple-800">
          {{ displayPrice(totalAmount + processingFees) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderQuery from '~/apollo/queries/order/order'
import { parseISO, format } from 'date-fns'

const currencyOptions = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
}).resolvedOptions()

export default {
  middleware: 'auth',
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
  computed: {
    processingFees() {
      return +(this.order.quantity * 0.034 + 0.5).toFixed(2)
    },
    totalAmount() {
      return this.order.gift.price * this.order.quantity
    },
    orderDate() {
      const date = parseISO(this.order.created_at)
      return format(date, 'dd/MM/yyyy p')
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
