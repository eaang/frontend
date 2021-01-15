<template>
  <client-only>
    <div class="h-16 bg-purple-800 w-full">
      <div
        class="container mx-auto px-4 flex items-center h-full text-white relative"
      >
        <div class="absolute inset-y-0 left-0 flex items-center pl-4">
          <div class="h-6 w-6">
            <Menu />
          </div>
        </div>
        <div class="flex-grow flex justify-center">
          <router-link to="/"
            ><div class="font-bold text-lg">Gift Ellie</div></router-link
          >
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {}
</script>
