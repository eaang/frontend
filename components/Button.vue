<template>
  <div class="btn w-full flex items-center" :class="classes">
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
  @apply text-center uppercase py-4;
}
.primary {
  @apply bg-purple-800 text-white font-bold;
}
.small {
  @apply text-sm py-2;
}
</style>
