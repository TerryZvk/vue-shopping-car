<script>
  export default {
    vuex: {
      getters: {
        cart: ({ index }) => index.cart
      }
    },

    computed: {
      'totalItem': function() {
        return this.cart.length
      }
    }
  }
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="#" v-link="{ path: '/' }">Shopping Cart</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
        	<li> <router-link to="{ path: '/index', activeClass: 'active' }"> iPhone 6S <span class="sr-only">(current)</span></router-link></li>
        	<li><router-link to="{ path: '/cart', activeClass: 'active' }"> 购物车 <span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></router-link></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<style media="screen">
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>