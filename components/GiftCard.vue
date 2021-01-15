<template>
  <div>
    <NuxtLink
      :to="{
        name: 'gifts-slug',
        params: { slug: gift.id },
      }"
    >
      <div>
        <img :src="apiUrl + gift.image.url" alt="" />
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
const apiUrl = process.env.API_URL || 'http://localhost:1337'

export default {
  data() {
    return {
      apiUrl: apiUrl,
    }
  },
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
