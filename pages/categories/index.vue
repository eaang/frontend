<template>
  <div>
    <div><Categories /></div>
    <div class="container mx-auto px-4 py-4 md:py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
        <div v-for="gift in gifts" :key="gift.id" class="flex justify-center">
          <GiftCard :gift="gift" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import giftsQuery from '~/apollo/queries/gift/gifts'

export default {
  data() {
    return {
      gifts: [],
    }
  },
  apollo: {
    gifts: {
      prefetch: true,
      query: giftsQuery,
    },
  },
}
</script>
