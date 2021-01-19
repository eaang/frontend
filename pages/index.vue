<template>
  <div>
    <Categories />
    <div class="container mx-auto px-6 h-screen space-y-6 py-6">
      <!-- Highlight box -->
      <Highlight />
      <!-- Gift Options -->
      <div class="container mx-auto space-y-6 text-center">
        <div class="text-2xl font-bold">What's the occasion?</div>
        <div class="text-gray-500 text-sm">
          Send the right gift for the right occasion! {{ occasion }}
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div @click="occasion = 3">
            <Button
              text="Birthday"
              class="small"
              :class="{
                'secondary-selected': occasion === 3,
                secondary: occasion !== 3,
              }"
            />
          </div>
          <div @click="occasion = 4">
            <Button
              text="Christmas"
              class="small"
              :class="{
                'secondary-selected': occasion === 4,
                secondary: occasion !== 4,
              }"
            />
          </div>
          <div @click="occasion = 5">
            <Button
              text="My Treat"
              class="small"
              :class="{
                'secondary-selected': occasion === 5,
                secondary: occasion !== 5,
              }"
            />
          </div>
          <div @click="occasion = 6">
            <Button
              text="Romance"
              class="small"
              :class="{
                'secondary-selected': occasion === 6,
                secondary: occasion !== 6,
              }"
            />
          </div>
        </div>
      </div>
      <!-- Carousels -->
      <div>
        <div v-for="gift in category.gifts">{{ gift.name }}</div>
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
      occasion: 3,
    }
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return { id: this.occasion }
      },
    },
  },
  methods: {
    setOccasion() {},
  },
}
</script>
