<template>
  <div>
    <div v-if="gift.id">
      <!-- Purchasing Item -->
      <div class="container mx-auto px-4 pt-4 space-y-6">
        <!-- Picture -->
        <div class="space-y-2">
          <div class="flex justify-center">
            <img class="h-64 w-64 object-cover" :src="gift.image.url" alt="" />
          </div>
          <div class="text-2xl font-bold">{{ gift.name }}</div>
          <div class="text-2xl font-bold">{{ displayPrice }}</div>
        </div>
        <!-- Purchasing Section -->
        <div class="flex">
          <div class="flex-1 text-lg font-bold">Quantity</div>
          <div class="flex space-x-4 items-center">
            <div
              v-if="quantity > 1"
              class="mathbtn mathbtn-active"
              @click="quantity--"
            >
              <Minus />
            </div>
            <div v-else class="mathbtn mathbtn-disabled">
              <Minus />
            </div>
            <div class="text-lg">{{ quantity }}</div>
            <div
              v-if="quantity < 8"
              class="mathbtn mathbtn-active"
              @click="quantity++"
            >
              <Plus />
            </div>
            <div v-else class="mathbtn mathbtn-disabled">
              <Plus />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 text-lg font-bold">Total</div>
          <div class="text-2xl font-bold text-purple-800">{{ totalPrice }}</div>
        </div>
        <div @click="setQuantity(quantity)">
          <nuxt-link
            :to="{ name: 'gifts-slug-customise', params: { slug: gift.id } }"
          >
            <Button text="Customise your gift!" classes="btn-pill primary"
          /></nuxt-link>
        </div>
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
              :src="gift.brand.logo.url"
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
import { mapMutations } from 'vuex'

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
    storeQuantity() {
      return this.$store.state.quantity
    },
  },
  methods: {
    setQuantity(x) {
      this.$store.commit('setQuantity', x)
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
.mathbtn {
  @apply h-5 w-5;
}
.mathbtn-active {
  @apply text-gray-700;
}
.mathbtn-disabled {
  @apply text-gray-400;
}
</style>
