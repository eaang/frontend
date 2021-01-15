<template>
  <div>
    <NuxtLink
      :to="{
        name: 'gifts-slug',
        params: { slug: gift.id },
      }"
    >
      <div>
        <img :src="imgUrl" alt="" />
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
    imgUrl() {
      return process.env.API_URL
        ? this.gift.image.url
        : process.env.apiUrl + this.gift.image.url
    },
  },
}
</script>
