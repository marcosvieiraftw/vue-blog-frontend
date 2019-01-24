<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link
        class="spacing"
        v-for="route in links"
        v-bind:key="route.id"
        :to="`${route.page}`">
        {{route.text}}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Users',
          page:'/users'
        },
        {
          id: 1,
          text: 'Login',
          page:'/login'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}
</style>