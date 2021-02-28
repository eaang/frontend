<template>
  <div class="p-6">
    <div class="font-bold underline text-sm mb-6">Purchase History</div>
    <div class="space-y-3">
      <div v-for="order in orders">
        <div
          class="grid grid-cols-3 grid-flow-col pb-3 border-b border-gray-200"
        >
          <div>
            <div class="">
              <img
                class="rounded-lg border border-gray-200 object-fit-cover h-24 w-24"
                :src="order.gift.image.url"
              />
            </div>
          </div>
          <div class="col-span-2">
            <div class="font-bold text-sm">{{ order.gift.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userGifts from '~/apollo/queries/user/usergifts'

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
}
</script>
