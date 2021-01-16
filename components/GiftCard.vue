<template>
  <NuxtLink
    :to="{
      name: 'gifts-slug',
      params: { slug: gift.id },
    }"
    ><div class="flex flex-col space-y-2">
      <div class="flex justify-center">
        <img class="h-40 w-40 object-cover" :src="gift.image.url" alt="" />
      </div>
      <div>
        <div class="flex-grow font-bold text-base">
          {{ gift.name }}
        </div>
        <div class="font-semibold text-sm">
          {{ gift.brand.name }}
        </div>
        <div class="font-bold text-base">{{ displayPrice }}</div>
      </div>
    </div></NuxtLink
  >
</template>

<script>
export default {
  props: {
    gift: {
      type: Object,
    },
  },
  computed: {
    displayPrice() {
      const currencyOptions = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'SGD',
      }).resolvedOptions()

      return (
        '$' +
        this.gift.price.toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
  },
}
</script>
