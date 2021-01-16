<template>
<<<<<<< HEAD
  <div :class="`is-${type}`" class="rounded-lg text-white text-sm p-6">
=======
  <div :class="`is-${type}`" class="text-white font-bold">
>>>>>>> b614e1615d8690f24f71c5a6fd04af05b74ca6e4
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
<<<<<<< HEAD
  @apply bg-green-500;
}
.is-danger {
  @apply bg-red-500;
=======
  @apply bg-green-600;
}
.is-danger {
  @apply bg-red-600;
>>>>>>> b614e1615d8690f24f71c5a6fd04af05b74ca6e4
}
</style>
