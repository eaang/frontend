<template>
  <div class="relative">
    <Sidebar v-if="sidebarStatus" class="absolute z-50" />
    <div
      v-if="sidebarStatus"
      class="z-40 w-screen h-screen absolute bg-gray-500 bg-opacity-75"
      @click="$nuxt.$emit('closeSidebar')"
    ></div>
    <Header class="z-30" />
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
