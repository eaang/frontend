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
  @apply text-center  py-4 rounded-lg font-bold;
}
.primary {
  @apply bg-purple-800 text-white;
}
.secondary {
  @apply bg-gray-200 text-gray-500 border border-gray-500;
}
.secondary-selected {
  @apply bg-purple-800 text-white;
}
.small {
  @apply text-sm py-2;
}
</style>
