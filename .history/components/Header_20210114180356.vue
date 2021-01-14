<template>
  <client-only>
    <div class="relative container mx-auto">
      <div class="absolute inset-x-0 top-0 h-16">Navbar</div>
      <div class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/" exact
              >Deliveroo clone</router-link
            >
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/restaurants" exact
              >Restaurants</router-link
            >
          </li>
          </div>
    </div>
  </client-only>
</template>

<script>
export default {}
</script>

