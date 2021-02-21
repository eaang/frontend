<template>
  <div>
    <!-- Gift box -->
    <div>
      <div class="w-screen giftbox px-6 py-12 space-y-6">
        <div class="text-xl font-bold text-center">You've been given</div>
        <img
          class="w-full h-64 object-scale-down"
          :src="order.gift.image.url"
          alt=""
        />
        <div class="text-xl font-bold text-center">
          {{ order.quantity }} x {{ order.gift.name }}
        </div>
        <div class="bg-white text-sm p-3 rounded-lg">{{ order.message }}</div>
      </div>
    </div>
    <!-- Voucher -->
    <div class="px-6 py-24 space-y-24">
      <!-- Barcode -->
      <img
        class="object-scale-down h-24 w-full"
        src="~/assets/barcode.gif"
        alt=""
      />
      <!-- Details -->
      <div class="text-sm space-y-6">
        <div class="flex justify-between">
          <div class="text-gray-600">Accepted By:</div>
          <div>{{ order.gift.brand.name }}</div>
        </div>
        <div class="flex justify-between">
          <div class="text-gray-600">Expiration Date:</div>
          <div>DD/MM/YYYY</div>
        </div>
        <div class="flex justify-between">
          <div class="text-gray-600">Voucher Number:</div>
          <div>{{ order.id }}</div>
        </div>
        <div class="flex justify-between">
          <div class="text-gray-600">Redeemed:</div>
          <div>No</div>
        </div>
      </div>
      <!-- Save -->
      <Button classes="primary btn-pill" text="Save Voucher to Phone" />
    </div>
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

<style scoped>
.giftbox {
  background-image: url('https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
}
</style>
