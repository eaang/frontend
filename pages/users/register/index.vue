<template>
  <div class="container mx-auto mt-12 px-6">
    <div class="font-bold text-center text-xl w-full">Welcome</div>
    <!-- Signup Form -->
    <form class="py-6" v-if="!success" method="post" @submit.prevent="register">
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
        <Button text="Register" classes="primary rounded-full" />
      </button>
    </form>
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
