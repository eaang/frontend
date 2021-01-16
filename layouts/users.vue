<template>
<<<<<<< HEAD
  <div class="my-6">
=======
  <div>
>>>>>>> b614e1615d8690f24f71c5a6fd04af05b74ca6e4
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
