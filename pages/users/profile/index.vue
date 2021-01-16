<template>
  <div class="container mx-auto px-6">
    <div class="mt-6">
      <div class="text-center font-bold text-lg">My Account</div>
      <div>
        <div>Username: {{ loggedInUser.username }}</div>
        <div>Email: {{ loggedInUser.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>
