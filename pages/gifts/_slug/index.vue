<template>
  <div>
    <div v-if="gift.id">
      <!-- Purchasing Item -->
      <div class="container mx-auto px-4 pt-4 space-y-6">
        <!-- Picture -->
        <div class="space-y-2">
          <div class="flex justify-center">
            <img
              class="h-64 w-64 object-cover"
              :src="imagePrefix + gift.image.url"
              alt=""
            />
          </div>
          <div class="text-2xl font-bold">{{ gift.name }}</div>
          <div class="text-2xl font-bold">{{ displayPrice }}</div>
        </div>
        <!-- Purchasing Section -->
        <div class="flex">
          <div class="flex-1 text-lg font-bold">Quantity</div>
          <div class="flex space-x-4 items-center">
            <div v-if="quantity > 1" class="h-4 w-4" @click="quantity--">
              <Minus />
            </div>
            <div v-else class="h-4 w-4 text-gray-400">
              <Minus />
            </div>
            <div>{{ quantity }}</div>
            <div v-if="quantity < 8" class="h-4 w-4" @click="quantity++">
              <Plus />
            </div>
            <div v-else class="h-4 w-4 text-gray-400">
              <Plus />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 text-lg font-bold">Total</div>
          <div class="text-2xl font-bold text-purple-800">{{ totalPrice }}</div>
        </div>
        <div><Button text="Buy Gift" classes="primary rounded-full" /></div>
      </div>
      <div class="container mx-auto px-4 py-12 space-y-12">
        <!-- Gift Description -->
        <div v-if="gift.description">
          <div class="title">About</div>
          <div class="text">{{ gift.description }}</div>
        </div>
        <!-- Why Buy -->
        <div>
          <div class="title">Why you should buy</div>
          <div class="grid grid-cols-4 gap-y-6 text">
            <div class="icon-box">
              <div class="icon"><Smile /></div>
            </div>
            <div class="col-span-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="icon-box">
              <div class="icon"><Gift /></div>
            </div>
            <div class="col-span-3">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="icon-box">
              <div class="icon"><ThumbsUp /></div>
            </div>
            <div class="col-span-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
        </div>
        <!-- The Brand -->
        <div>
          <div class="title">About the brand</div>
          <div class="flex justify-center mb-6">
            <img
              class="h-20 object-contain"
              :src="imagePrefix + gift.brand.logo.url"
              alt=""
            />
          </div>
          <div class="text">{{ gift.brand.description }}</div>
        </div>
        <!-- How to Use -->
        <div>
          <div class="title">How to use</div>
          <div class="text space-y-2">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import giftQuery from '~/apollo/queries/gift/gift'

const currencyOptions = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SGD',
}).resolvedOptions()

export default {
  data() {
    return {
      gift: Object,
      quantity: 1,
    }
  },
  apollo: {
    gift: {
      prefetch: true,
      query: giftQuery,
      variables() {
        return { id: this.$route.params.slug }
      },
    },
  },
  computed: {
    displayPrice() {
      return (
        '$' +
        this.gift.price.toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
    totalPrice() {
      return (
        '$' +
        (this.quantity * this.gift.price).toLocaleString('en-US', {
          ...currencyOptions,
          style: 'decimal',
        })
      )
    },
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
  @apply uppercase text-sm text-purple-800 underline mb-6;
}
.text {
  @apply text-sm text-gray-600;
}
.icon-box {
  @apply w-full h-full flex items-center justify-center;
}
.icon {
  @apply h-12 w-12 text-gray-700;
}
</style>
