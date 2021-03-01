<template>
  <div class="h-16 bg-purple-800 w-full">
    <div
      class="container mx-auto px-4 flex items-center text-white h-full relative"
    >
      <div class="absolute inset-y-0 left-0 flex items-center pl-6">
        <div class="h-8 w-8" @click="$nuxt.$emit('openSidebar')">
          <Menu />
        </div>
      </div>
      <div class="flex-grow flex justify-center">
        <NuxtLink to="/"
          ><div class="font-bold text-lg">Gift Ellie</div></NuxtLink
        >
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-6">
        <div class="h-6 w-6">
          <nuxt-link to="/order/checkout">
            <Cart />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
