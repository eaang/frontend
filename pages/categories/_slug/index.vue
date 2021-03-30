<template>
  <div>
    <div class="container mx-auto px-4 py-4 md:py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
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
