<template>
  <div class="my-6 md:my-0">
    <!-- Top Section -->
    <Header class="hidden md:block" />
    <Categories class="hidden md:block" />
    <div
      class="container mx-auto flex items-center justify-center relative px-6 mt-24"
    >
      <div class="h-6 w-6 absolute top-1 left-6" @click="$router.go(-1)">
        <Back class="block md:hidden" />
      </div>
      <Logo class="block md:hidden" />
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
