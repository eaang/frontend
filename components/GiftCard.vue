<template>
  <div>
    <NuxtLink
      :to="{
        name: 'gifts-slug',
        params: { slug: gift.id },
      }"
    >
      <div>
        <img :src="imageUrl" alt="" />
      </div>
      <div class="font-bold text-base">
        {{ gift.name }}
      </div>
      <div class="font-semibold text-sm">
        {{ gift.brand.name }}
      </div>
      <div class="font-bold text-base">{{ displayPrice }}</div></NuxtLink
    >
  </div>
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
    imageUrl() {
      if (process.env.NODE_ENV !== 'development') {
        return this.gift.image.url
      } else {
        return this.$config.apiUrl + this.gift.image.url
      }
    },
  },
}
</script>
