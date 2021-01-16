<template>
  <div class="container mx-auto px-6">
    <div class="mt-6">
      <div class="text-center font-bold text-lg mb-6">My Account</div>
      <div class="space-y-6">
        <div class="flex justify-around">
          <img
            class="h-64 w-64 object-cover"
            :src="loggedInUser.profile.image.url"
            alt=""
          />
        </div>
        <div class="flex space-x-2">
          <div>
            Name:
            {{
              loggedInUser.profile.firstname +
              ' ' +
              loggedInUser.profile.lastname
            }}
          </div>
        </div>
        <div class="flex space-x-2">
          <div>Username:</div>
          <div>
            {{ loggedInUser.username }}
          </div>
        </div>
        <div class="flex space-x-2">
          <div>Email:</div>
          <div>
            {{ loggedInUser.email }}
          </div>
        </div>
        <div>
          <nuxt-link to="/users/profile/edit"
            ><Button text="Edit Info" class="primary small"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  data() {
    return {
      profile: {},
    }
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>
