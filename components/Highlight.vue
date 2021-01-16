<template>
  <div class="w-full" v-if="!loading">
    <div class="font-bold text-2xl">
      Looking for a simple but memorable gift?
    </div>
    <div class="flex items-center justify-between h-36 space-x-4">
      <div class="space-y-6">
        <div class="font-semibold">{{ highlight.description }}</div>
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
          :src="highlight.gift.image.url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import highlightQuery from '~/apollo/queries/highlight/highlight'

export default {
  data() {
    return {
      highlight: {},
      loading: 0,
    }
  },
  apollo: {
    $loadingKey: 'loading',
    highlight: {
      prefetch: true,
      query: highlightQuery,
    },
  },
}
</script>
