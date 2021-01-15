<template>
  <div class="btn w-full flex items-center py-4" :class="classes">
    <div class="w-full">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.btn {
  @apply text-center uppercase;
}
.primary {
  @apply bg-purple-800 text-white font-bold;
}
</style>
