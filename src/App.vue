<template>
  <div id="app">
    <cart-nav></cart-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
    'cart-nav':Navbar
  }
}
</script>