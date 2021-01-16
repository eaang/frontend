<template>
  <div class="my-6">
    <!-- Top Section -->
    <div
      class="container mx-auto flex items-center justify-center relative px-6 mt-24"
    >
      <div class="h-6 w-6 absolute top-1 left-6" @click="$router.go(-1)">
        <Back />
      </div>
      <Logo />
    </div>
    <!-- Main Portion -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarStatus: false,
    }
  },
}
</script>
