<template>
  <div class="container mx-auto mt-12 px-6">
    <div class="font-bold text-center text-xl w-full">Welcome back!</div>
    <div class="my-12">
      <Notification v-if="error" type="danger" :message="error" />
    </div>
    <!-- Signup Form -->
    <form
      v-if="!isAuthenticated"
      class="my-6"
      method="post"
      @submit.prevent="login"
    >
      <div class="space-y-6 mb-12">
        <div class="field">
          <label class="label">Email</label>
          <input
            v-model="email"
            type="email"
            class="input"
            name="email"
            required
          />
        </div>
        <div class="field">
          <label class="label">Password</label>
          <input
            v-model="password"
            type="password"
            class="input"
            name="password"
            required
          />
          <div class="w-full text-xs text-right">
            <nuxt-link to="/users/forgot-password">Forgot password?</nuxt-link>
          </div>
        </div>
      </div>

      <button type="submit" class="w-full">
        <Button text="Sign In" classes="primary rounded-full" />
      </button>
    </form>
    <div class="w-full text-xs text-center">
      Don't have an account yet?
      <nuxt-link to="/users/register" class="text-purple-800"
        >Sign Up</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  layout: 'users',
  data() {
    return {
      sidebarStatus: false,
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async login() {
      this.error = null
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.email,
            password: this.password,
          },
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>

<style scoped>
.label {
  @apply text-gray-400 text-sm;
}
.field {
  @apply space-y-2;
}
input {
  @apply w-full border-b border-gray-400 focus:border-purple-800 py-2;
}
</style>
