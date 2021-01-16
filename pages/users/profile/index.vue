<template>
  <div>
    <div>My Account</div>
    <div>
      <div>Username: {{ loggedInUser.username }}</div>
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
