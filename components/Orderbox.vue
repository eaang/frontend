<template>
  <div class="space-y-2">
    <div class="flex px-6 space-x-3 items-center">
      <div class="w-28">
        <img
          :src="url"
          alt=""
          class="w-28 h-28 object-cover rounded-lg border border-gray-200"
        />
      </div>
      <div>
        <div class="text-gray-400 text-xs">
          {{ brand }}
        </div>
        <div class="text-sm">
          {{ name }}
        </div>
        <div class="flex text-sm">
          <div class="text-purple-800">
            {{ displayPrice(price) }}
          </div>
          <div class="text-gray-600">&nbsp;x {{ quantity }}</div>
        </div>
      </div>
    </div>

    <div class="px-6 flex justify-between font-semibold">
      <div>
        {{ name }}
      </div>
      <div class="text-purple-800">
        {{ displayPrice(totalAmount) }}
      </div>
    </div>
  </div>
</template>

<script>
const currencyOptions = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
}).resolvedOptions()

export default {
  props: {
    brand: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 1,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalAmount() {
      return this.price * this.quantity
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
