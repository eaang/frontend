<template>
  <div
    class="container mx-auto flex items-center justify-center relative px-6 mt-24"
  >
    <div class="h-6 w-6 absolute top-1 left-6" @click="$router.go(-1)">
      <Back />
    </div>
    <div class="text-center space-y-6">
      <div class="text-4xl">Gift Ellie</div>
      <div class="text-xs">
        Meaningful gifts<br />found and sent<br />online!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'users',
  data() {
    return {
      sidebarStatus: false,
    }
  },
}
</script>
