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
  @apply text-center  py-4 rounded font-bold cursor-pointer;
}
.btn-pill {
  @apply rounded-full;
}
.primary {
  @apply text-white bg-purple-800;
}
.secondary {
  @apply bg-gray-200 text-gray-500 border border-gray-500;
}
.secondary-selected {
  @apply text-white bg-purple-800;
}
.small {
  @apply text-sm py-2;
}
.disabled {
  @apply bg-gray-300 cursor-default;
}
</style>
