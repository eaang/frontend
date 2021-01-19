<template>
  <div>
    <Categories />
    <!-- Highlight box -->
    <div class="m-6">
      <Highlight />
    </div>
    <!-- Gift Options -->
    <div class="m-6 space-y-6 text-center">
      <div class="text-2xl font-bold">What's the occasion?</div>
      <div class="text-gray-600 text-sm">
        Send the right gift for the right occasion!
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
    <!-- Sliders -->
    <div class="w-screen my-6">
      <div class="flex no-scrollbar">
        <div class="p-3"></div>
        <div class="bg-gray-200 rounded-lg">
          <div class="flex space-x-6">
            <div v-for="gift in category.gifts">
              <NuxtLink
                :to="{
                  name: 'gifts-slug',
                  params: { slug: gift.id },
                }"
              >
                <div
                  class="bg-white rounded-lg w-36 h-full border border-gray-300"
                >
                  <div class="flex justify-center">
                    <img
                      class="h-36 w-36 object-cover rounded-t-lg"
                      :src="gift.image.url"
                      alt=""
                    />
                  </div>
                  <div
                    class="font-bold text-center text-sm px-6 flex flex-col h-20 py-2"
                  >
                    <div class="flex-grow flex items-center justify-around">
                      {{ gift.name }}
                    </div>
                    <div>{{ displayPrice(gift.price) }}</div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="p-3"></div>
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
    displayPrice(cost) {
      const currencyOptions = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'SGD',
      }).resolvedOptions()

      return (
        '$' +
        cost.toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
  },
}
</script>

<style scoped>
.no-scrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}
</style>
