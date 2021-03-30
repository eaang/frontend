<template>
  <div class="relative">
    <Sidebar v-if="sidebarStatus" class="absolute z-50" />
    <div
      v-if="sidebarStatus"
      class="z-40 w-screen h-screen absolute bg-gray-500 bg-opacity-75"
      @click="$nuxt.$emit('closeSidebar')"
    ></div>
    <Header class="z-30" />
    <Categories class="hidden md:block" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarStatus: false,
    }
  },
  created() {
    this.$nuxt.$on('closeSidebar', () => {
      this.sidebarStatus = false
    })
    this.$nuxt.$on('openSidebar', () => {
      this.sidebarStatus = true
    })
  },
}
</script>

<style>
.no-scrollbar {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}
</style>
