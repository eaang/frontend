<template>
  <div class="h-screen/75 w-screen/75 flex flex-col">
    <div class="h-1/3 bg-purple-500 rounded-tr-xl pt-12 px-6">
      <div class="flex w-full justify-between items-top">
        <div>
          <div v-if="!isAuthenticated" class="text-white text-lg font-bold">
            Welcome!
          </div>
          <div v-else>
            <div>
              <img
                class="h-12 w-12 rounded-full object-cover"
                :src="loggedInUser.profile.image.url"
                alt=""
              />
            </div>
            <div class="text-white text-lg font-bold">
              Welcome,
              {{ loggedInUser.profile.firstname }}!
            </div>
            <div class="text-white text-xs">@{{ loggedInUser.username }}</div>
          </div>
        </div>
        <div class="h-8 w-8 text-white" @click="$nuxt.$emit('closeSidebar')">
          <Close />
        </div>
      </div>
    </div>
    <div class="flex-grow bg-purple-800 rounded-br-xl py-12 px-6 flex flex-col">
      <div v-if="isAuthenticated" class="text-white space-y-4">
        <div @click="$nuxt.$emit('closeSidebar')">
          <nuxt-link to="/users/profile">Account</nuxt-link>
        </div>
        <nuxt-link to="/users/giftbox">My Giftbox</nuxt-link>
      </div>
      <div class="text-gray-300 text-sm flex-grow flex">
        <div class="space-y-2 self-end">
          <div>How It Works</div>
          <div>About Us</div>
          <div v-if="!isAuthenticated">
            <nuxt-link to="/users/login">Log In</nuxt-link>
          </div>
          <div v-if="!isAuthenticated">
            <nuxt-link to="/users/register">Sign Up</nuxt-link>
          </div>
          <div v-if="isAuthenticated" @click="logout" class="cursor-pointer">
            Log Out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      this.$nuxt.$emit('closeSidebar')
      await this.$auth.logout()
    },
  },
}
</script>
