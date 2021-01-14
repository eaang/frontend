<template>
  <client-only>
    <div class="relative h-32 w-32 ...">
      <div class="absolute inset-x-0 top-0 h-16 ...">1</div>
    </div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/" exact
              >Deliveroo clone</router-link
            >
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/restaurants" exact
              >Restaurants</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </client-only>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
