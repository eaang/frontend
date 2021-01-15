<template>
  <div :class="`is-${type}`" class="text-white font-bold">
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
  @apply bg-green-600;
}
.is-danger {
  @apply bg-red-600;
}
</style>
