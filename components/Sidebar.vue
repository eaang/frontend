<template>
  <div class="h-screen/75 w-screen/75 flex flex-col">
    <div class="h-1/3 bg-purple-500 rounded-tr-lg pt-12 px-6">
      <div class="flex w-full justify-between items-center">
        <div class="text-white text-lg font-bold">
          <div v-if="!isAuthenticated">Welcome!</div>
          <div v-else>Logged in!</div>
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
        <div>Log In</div>
        <div>Sign Up</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
