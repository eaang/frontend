<template>
  <div class="p-6 space-y-6" v-if="order.gift">
    <div class="border-b border-gray-200 pb-6 flex flex-col items-center">
      <div class="h-20 w-20 text-purple-800"><Check /></div>
      <div class="font-bold">Great! Your payment has been accepted.</div>
    </div>
    <div class="flex flex-col items-center space-y-6">
      <img class="object-cover h-20 w-20" :src="order.gift.image.url" alt="" />
      <div class="text-center font-bold">
        Now select the messenger app you want to use to send your gift:
      </div>
    </div>
    <div class="space-y-6">
      <div class="grid grid-cols-4 rounded-lg border border-purple-800 h-12">
        <div class="flex items-center justify-center">
          <WhatsApp class="h-5 w-5" />
        </div>
        <div class="col-span-3 h-full flex items-center font-bold">
          WhatsApp
        </div>
      </div>
      <div class="grid grid-cols-4 rounded-lg border border-purple-800 h-12">
        <div class="flex items-center justify-center">
          <Share class="h-6 w-6 text-purple-800" />
        </div>
        <div class="col-span-3 h-full flex items-center font-bold">
          All apps
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="text-center font-bold">
        Or copy your gift URL to send it directly.
      </div>
    </div>
    <div>
      <nuxt-link :to="`/redeem/` + $route.params.slug">
        <div class="grid grid-cols-4 rounded-lg border border-purple-800 h-12">
          <div class="flex items-center justify-center">
            <Copy class="h-6 w-6 text-purple-800" />
          </div>
          <div class="col-span-3 h-full flex items-center font-bold">
            Copy gift URL
          </div>
        </div></nuxt-link
      >
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
