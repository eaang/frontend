<template>
  <div class="h-screen/75 w-screen/75 flex flex-col">
    <div class="h-1/3 bg-purple-500 rounded-tr-lg pt-12 px-6">
      <div class="flex w-full justify-between items-center">
        <div>
          <div v-if="!isAuthenticated" class="text-white text-lg font-bold">
            Welcome!
          </div>
          <div v-else>
            <div class="text-white text-lg font-bold"></div>
            <div class="text-white text-xs">@{{ loggedInUser.username }}</div>
          </div>
        </div>
        <div class="h-8 w-8 text-white" @click="$nuxt.$emit('closeSidebar')">
          <Close />
        </div>
      </div>
    </div>
    <div class="flex-grow bg-purple-800 rounded-br-lg pb-12 px-6 flex flex-row">
      <div class="text-white text-sm space-y-2 self-end">
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
