<template>
  <div
    class="container md:mx-auto md:px-36 md:py-12 md:flex-row md:justify-center"
  >
    <div class="w-full h-12">
      <div class="flex h-full items-center pl-6">
        <div class="text-2xl md:text-4xl font-bold">Customise Your Gift</div>
      </div>
    </div>

    <div class="py-6 md:mx-6 space-y-6 md:mt-12 md:flex" :style="bgImage">
      <div class="mx-6 flex md:w-half justify-around">
        <img
          :src="order.gift.image.url"
          alt=""
          class="h-56 w-56 object-cover"
        />
      </div>
      <div class="h-40 md:flex-grow mx-6">
        <textarea
          class="w-full h-full px-4 py-2 border border-black rounded"
          v-model="message"
          placeholder="Write a message to the person who'll be receiving this gift!"
        />
      </div>
    </div>

    <div class="px-6 py-6 space-y-6">
      <div class="border border-black rounded p-2 flex space-x-6 no-scrollbar">
        <div class="h-16 w-16 bg-gray-300" @click="selectedBg = null">
          <div class="text-xs flex h-full text-center items-center p-1">
            No Wrapping
          </div>
        </div>
        <div v-for="background in backgrounds" :key="background.id">
          <div class="h-16 w-16" @click="selectedBg = background">
            <img
              :src="background.image.url"
              alt=""
              class="h-16 w-16 object-cover"
            />
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <div @click="goToCheckout">
          <Button text="Get this gift!" classes="primary btn-pill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgQuery from '~/apollo/queries/background/backgrounds'

export default {
  data() {
    return {
      backgrounds: Object,
      selectedBg: null,
      message: '',
    }
  },
  apollo: {
    backgrounds: {
      prefetch: true,
      query: bgQuery,
    },
  },
  computed: {
    order() {
      return this.$store.state.order.order
    },
    bgImage() {
      if (this.selectedBg !== null) {
        return `background-image: url(${this.selectedBg.image.url}); background-repeat: no-repeat; background-size: cover`
      } else {
        return null
      }
    },
  },
  methods: {
    goToCheckout() {
      this.$store.commit('order/setBgMessage', {
        bg: this.selectedBg,
        message: this.message,
      })
      const order = this.$store.state.order.order
      this.$cookies.set('order', order)
      this.$router.push('/order/checkout')
    },
  },
}
</script>
