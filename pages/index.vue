<template>
  <div>
    <Categories />
    <div class="container mx-auto px-6 h-screen space-y-6 py-6">
      <!-- Highlight box -->
      <div class="w-full" v-if="highlight">
        <div class="title w-full">A simple but memorable gift?</div>
        <div class="flex items-center justify-between h-48 space-x-4">
          <div class="space-y-6">
            <div class="font-semibold text-sm">{{ highlight.description }}</div>
            <div>
              <NuxtLink
                :to="{
                  name: 'gifts-slug',
                  params: { slug: highlight.gift.id },
                }"
              >
                <Button text="View" classes="primary small rounded-lg"
              /></NuxtLink>
            </div>
          </div>
          <div class="w-2/5">
            <img
              class="w-full object-cover"
              :src="imagePrefix + highlight.gift.image.url"
              alt=""
            />
          </div>
        </div>
      </div>
      <div v-else>loading...</div>
    </div>
  </div>
</template>

<script>
import highlightQuery from '~/apollo/queries/highlight/highlight'

export default {
  data() {
    return {
      highlight: [],
    }
  },
  apollo: {
    highlight: {
      prefetch: true,
      query: highlightQuery,
    },
  },
  computed: {
    imagePrefix() {
      if (process.env.NODE_ENV !== 'development') {
        return ''
      } else {
        return this.$config.apiUrl
      }
    },
  },
}
</script>

<style scoped>
.title {
  @apply font-bold text-lg text-center;
}
</style>
