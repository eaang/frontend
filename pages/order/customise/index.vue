<template>
  <div>
    <div class="w-full h-12">
      <div class="flex h-full items-center pl-6 font-semibold text-xl">
        Customise Your Gift
      </div>
    </div>

    <div class="py-6 space-y-6" :style="bgImage">
      <div class="mx-6 flex justify-around">
        <img
          :src="order.gift.image.url"
          alt=""
          class="h-56 w-56 object-cover"
        />
      </div>
      <div class="h-40 mx-6">
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
        <div>
          <Button
            text="Create account to purchase"
            classes="primary btn-pill"
          />
        </div>
        <div class="text-center" @click="continueOrder">
          <nuxt-link to="/order/checkout" class="underline text-purple-800"
            >checkout as a guest</nuxt-link
          >
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
    continueOrder() {
      this.$store.commit('order/setBgMessage', {
        bg: this.selectedBg,
        message: this.message,
      })
    },
  },
}
</script>
