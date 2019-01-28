<template>
  <div id="app">
    <HelloWorld msg="top 10 crypto price and pricechange"/>
    <table class="table table-hover jumbotron col-lg-12 col-md-12 col-sm-10 col-xs-12">
    <tablehead />
    <tablebody />
    </table>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tablehead from './components/Tablehead.vue'
import Tablebody from './components/Tablebody.vue'

// const CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
// const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com/";
// const BASE_IMAGE_URL = "https://www.cryptocompare.com"
// const UPDATE_INTERVAL = 60 * 1000;

export default {
  name: 'app',
  components: {
    HelloWorld,
    Tablehead,
    Tablebody
  },
  data() {
    return {
    
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  flex-direction:column;
}


#logo{
  text-align: left;
}
h1 {
  text-align: center;
}

td img {
  width: 25px;
}

.jumbotron p {
  font-size: 1.2em;
}

.jumbotron {
  margin-bottom: 5em;
}
</style>
