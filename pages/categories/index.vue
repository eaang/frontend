<template>
  <div>
    <div><Categories /></div>
    <div class="container mx-auto px-4 pt-4">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="gift in gifts" :key="gift.id">
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
  mounted() {
    console.log(process.env.IMG_URL)
  },
}
</script>
