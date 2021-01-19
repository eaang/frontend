<template>
  <div>
    <div class="w-full h-12 bg-gray-200 border-b border-gray-500">
      <div class="flex h-full items-center pl-6 font-semibold text-xl">
        Customise Your Gift
      </div>
    </div>

    <div class="my-6 space-y-6">
      <div class="text-center text-2xl font-bold">
        {{ gift.name }} x {{ storeQuantity }}
      </div>
      <div class="mx-6 flex justify-around">
        <img :src="gift.image.url" alt="" class="h-56 w-56 object-cover" />
      </div>
      <div class="h-48 mx-6 border border-gray-500">
        <textarea
          class="w-full h-full px-4 py-2"
          placeholder="Write a message to the person who'll be receiving this gift!"
        />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import giftQuery from '~/apollo/queries/gift/gift'
import bgQuery from '~/apollo/queries/background/backgrounds'

export default {
  data() {
    return {
      gift: Object,
      backgrounds: Object,
      quantity: 1,
      selectedBg: 1,
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
    backgrounds: {
      prefetch: true,
      query: bgQuery,
    },
  },
  computed: {
    storeQuantity() {
      return this.$store.state.quantity
    },
  },
}
</script>
