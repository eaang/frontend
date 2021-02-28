<template>
  <div class="p-6">
    <div class="font-bold underline text-sm mb-6">Purchase History</div>
    <div class="space-y-3">
      <div v-for="order in orders">
        <div
          class="grid grid-cols-3 grid-flow-col pb-3 border-b border-gray-200"
        >
          <div>
            <div>
              <img
                class="rounded-lg border border-gray-200 object-fit-cover h-24 w-24"
                :src="order.gift.image.url"
              />
            </div>
          </div>
          <div class="col-span-2 flex flex-col justify-between">
            <div class="flex justify-between text-sm">
              <div class="font-bold">
                {{ order.gift.name }} x {{ order.quantity }}
              </div>
              <div class="text-purple-800">
                {{ price(order.gift.price * order.quantity) }}
              </div>
            </div>
            <div class="flex space-x-3">
              <div class="w-full">
                <nuxt-link :to="'/order/' + order.id + '/details'">
                  <Button text="Details" classes="primary xsmall btn-pill" />
                </nuxt-link>
              </div>
              <div class="w-full">
                <nuxt-link :to="'/order/' + order.id">
                  <Button text="Resend" classes="primary xsmall btn-pill" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userGifts from '~/apollo/queries/user/usergifts'

const currencyOptions = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
}).resolvedOptions()

export default {
  data() {
    return {
      user: Object,
    }
  },
  computed: {
    orders() {
      return this.user.orders
    },
  },
  apollo: {
    user: {
      prefetch: true,
      query: userGifts,
      variables() {
        return { id: this.$auth.user.id }
      },
    },
  },
  methods: {
    price(cost) {
      return (
        '$' +
        cost.toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
  },
}
</script>
