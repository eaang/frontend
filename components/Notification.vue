<template>
  <div :class="`is-${type}`" class="rounded-lg text-white text-sm p-6">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (val) => ['danger', 'success'].includes(val),
    },
    message: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.is-success {
  @apply bg-green-500;
}
.is-danger {
  @apply bg-red-500;
}
</style>
