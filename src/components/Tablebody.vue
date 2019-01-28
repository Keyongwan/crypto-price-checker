<template>
    <tbody>
  <tr v-bind:key="index" v-for="(coin,index) in coins">
    <td>{{ coin.rank }}</td>
    <td id="logo"><img v-bind:src="getCoinImage(coin.symbol)"> {{ coin.name }}</td>
    <td>{{ coin.symbol }}</td>
    <td>{{ coin.price_usd | currency }}</td>
    <td v-bind:style="getColor(coin.percent_change_1h)">
      <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h +"%"}}
    </td>
    <td v-bind:style="getColor(coin.percent_change_24h)">
      <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}
    </td>
    <td v-bind:style="getColor(coin.percent_change_7d)">
      <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d }}
    </td>
    <td>{{ coin.market_cap_usd | currency }}</td>
  </tr>
</tbody>
</template>

<script>
import axios from 'axios'
const CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com/";
const BASE_IMAGE_URL = "https://www.cryptocompare.com"
// const UPDATE_INTERVAL = 60 * 1000;


export default {
  name: 'TableBody',
//   components: {
//     HelloWorld,
//     Tablehead,
//     Tablebody
//   },
  data() {
    return {
      coins:[],
      coindata:{}
    }
  }

    ,
    methods: {
        getCoinData : function() {
            console.log('Getting Coin Data')

            axios.get(CRYPTOCOMPARE_API_URI + "/data/all/coinlist")
                .then((resp) => {
                    console.log('got Data')
                    this.coinData = resp.data.Data;
                    this.getCoins();
                })
                .catch((err) => {
                    this.getCoins();
                    console.log('Error', err.message);
                })
        },
        getCoins: function() {
            axios.get(COINMARKETCAP_API_URI + 'v1/ticker/?limit=10')
                .then((resp) => this.coins = resp.data)
                .catch(err => console.log(err))
        },
        getCoinImage: function(symbol) {
            try {
                return BASE_IMAGE_URL + this.coinData[symbol]['ImageUrl'];
            } catch (err) {
                return "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            }
        },
        getColor: (num) => {
            return num > 0 ? "color:green;" : "color:red;";
        }
    },
    created: function() {
        this.getCoinData();
        this.getCoins();
    },
}
</script>