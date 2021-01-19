<template>
  <div class="w-full h-12 bg-gray-200 border-b border-gray-500">
    <div
      class="container mx-auto px-6 flex space-x-4 h-full items-center no-scrollbar"
    >
      <div>
        <NuxtLink to="/">HOT DEALS</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/categories">ALL GIFTS</NuxtLink>
      </div>
      <div v-for="category in headerCategory.categories" :key="category.id">
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
import headerCategories from '~/apollo/queries/header-categories/header-categories'

export default {
  data() {
    return {
      headerCategory: [],
    }
  },
  apollo: {
    headerCategory: {
      prefetch: true,
      query: headerCategories,
    },
  },
}
</script>

<style scoped>
a {
  @apply uppercase text-gray-400 whitespace-nowrap;
}
.nuxt-link-exact-active {
  @apply font-semibold text-purple-800 border-b-4 border-purple-800;
}
</style>
