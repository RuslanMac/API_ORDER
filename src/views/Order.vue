<template>
  <div>
    <v-row>
      <v-col class="mt-2 ml-2">
        <v-btn depressed @click="getAccessToken()">
          Загрузить заказы
        </v-btn>
      </v-col>
      <v-row
        ><v-col>{{ apiKey }} </v-col></v-row
      >
    </v-row>
    <OrderDetails
      v-for="item in orders.Result"
      :key="item.Id"
      :order="item"
    ></OrderDetails>
  </div>
</template>
<script>
import OrderDetails from "../components/OrderDetails.vue";
import apiClient from "@/services/apiClient";
var publicKey = "38cd79b5f2b2486d86f562e3c43034f8";
var privateKey = "8e49ff607b1f46e1a5e8f6ad5d312a80";
export default {
  data() {
    return {
      orders: "",
      apiKey: "",
      accessToken: "",
      requestToken: "",
    };
  },
  components: {
    OrderDetails,
  },
  methods: {
    getOrder() {
      apiClient
        .getOrders(this.accessToken)
        .then((response) => {
          this.orders = response.data;
        })
        .catch((error) => {
          console.log("There error" + " " + error);
        });
    },

    getAccessToken() {
      apiClient
        .getRequestToken()
        .then((response) => (this.requestToken = response.data.RequestToken))
        .catch(() => {
          console.log("There is error");
        });
      var tsum = this.getSHA1();
      //var passwords = sha1(password);
      var requestToken1 = this.requestToken;
      apiClient
        .getAccessToken(requestToken1, publicKey, tsum)
        .then((response) => {
          this.accessToken = response.data.AccessToken;
          this.getOrder();
        });
    },
    getSHA1() {
      var crypto = require("crypto");
      var shasum = crypto.createHash("sha1");
      var password = this.requestToken + privateKey;
      var tsum = shasum.update(password);
      tsum = shasum.digest("hex");
      return tsum;
    },
  },
};
</script>
