<template>
  <div class="h-16 md:h-24 bg-purple-800 md:bg-white w-full">
    <div
      class="container mx-auto px-4 md:px-36 flex items-center text-white h-full relative"
    >
      <div class="absolute inset-y-0 left-0 flex items-center pl-6">
        <div class="h-8 w-8 md:invisible" @click="$nuxt.$emit('openSidebar')">
          <Menu />
        </div>
      </div>
      <div class="flex-grow flex justify-center md:justify-between md:mt-6">
        <NuxtLink to="/"
          ><div
            class="font-bold md:font-normal text-lg md:text-2xl md:text-purple-800"
          >
            Gift Ellie
          </div></NuxtLink
        >
        <div
          class="hidden md:flex items-center space-x-6 text-black font-bold text-sm"
        >
          <a href="#how_use"
            ><div
              class="rounded-lg border-gray-400 border p-2 space-x-2 flex items-center"
            >
              <div class="h-6 w-6"><Exclamation /></div>
              <div class="">How to Use</div>
            </div></a
          >
          <nuxt-link to="/users/login">
            <div class="p-2 space-x-2 flex items-center">
              <div class="h-6 w-6 text-purple-800">
                <Login />
              </div>
              <div class="">Login</div>
            </div>
          </nuxt-link>
          <nuxt-link to="/order/checkout">
            <div class="p-2 space-x-2 flex items-center">
              <div class="h-6 w-6 text-purple-800">
                <Cart />
              </div>
              <div class="">Cart</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-6 md:invisible"
      >
        <div class="h-6 w-6">
          <nuxt-link to="/order/checkout">
            <Cart />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
