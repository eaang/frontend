<template>
  <div class="container mx-auto mt-12 px-6">
    <div class="font-bold text-center text-xl w-full">Welcome!</div>
    <div class="my-12">
      <Notification v-if="success" type="success" :message="success" />
      <Notification v-if="error" type="danger" :message="error" />
    </div>
    <!-- Signup Form -->
    <form class="my-6" v-if="!success" method="post" @submit.prevent="register">
      <div class="space-y-6 mb-12">
        <div class="field">
          <label class="label">Username</label>
          <input
            v-model="username"
            type="text"
            class="input"
            name="username"
            required
          />
        </div>
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
        </div>
      </div>

      <button type="submit" class="w-full">
        <Button text="Sign Up" classes="primary rounded-full" />
      </button>
    </form>
    <div class="w-full text-xs text-center">
      Already have an account?
      <nuxt-link to="/users/login" class="text-purple-800">Log In</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'users',
  data() {
    return {
      sidebarStatus: false,
      username: '',
      email: '',
      password: '',
      success: null,
      error: null,
    }
  },
  methods: {
    async register() {
      this.error = null
      try {
        this.$axios.setToken(false)
        let response = await this.$axios.post('auth/local/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        console.log(response)
        this.success = `A confirmation link has been sent to your email account. \
 Please click on the link to complete the registration process.`
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
