<template>
  <div>
    <div><Categories /></div>
    <div class="container mx-auto px-4 pt-4">
      <div class="grid grid-cols-2 gap-4">
        <div v-for="gift in category.gifts" :key="gift.id">
          <GiftCard :gift="gift" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryQuery from '~/apollo/queries/category/category'

export default {
  data() {
    return {
      category: Object,
    }
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return { id: this.$route.params.slug }
      },
    },
  },
}
</script>
