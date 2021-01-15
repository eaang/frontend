<template>
  <div class="w-full h-12 bg-gray-200 border-b border-gray-500">
    <div class="container mx-auto px-4 flex space-x-4 h-full items-center">
      <div>
        <NuxtLink to="/categories">ALL GIFTS</NuxtLink>
      </div>
      <div v-for="category in categories" :key="category.id">
        <NuxtLink
          :to="{
            name: 'categories-slug',
            params: { slug: category.id },
          }"
        >
          {{ category.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
}
</script>

<style scoped>
a {
  @apply uppercase text-gray-400;
}
.nuxt-link-exact-active {
  @apply font-semibold text-purple-800 border-b-4 border-purple-800;
}
</style>
