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
    getRequestToken() {
      apiClient
        .getRequestToken()
        .then((response) => (this.requestToken = response.data.RequestToken))
        .catch(() => {
          console.log("There is error");
        });
    },
    getAccessToken() {
      var tsum = this.getSHA1();
      //var passwords = sha1(password);
      var requestToken1 = this.requestToken;
      apiClient
        .getAccessToken(requestToken1, process.env.VUE_APP_PUBLIC_KEY, tsum)
        .then((response) => {
          this.accessToken = response.data.AccessToken;
          this.getOrder();
        });
    },
    getSHA1() {
      var crypto = require("crypto");
      var shasum = crypto.createHash("sha1");
      var password = this.requestToken + process.env.VUE_APP_PRIVATE_KEY;
      var tsum = shasum.update(password);
      tsum = shasum.digest("hex");
      return tsum;
    },
  },
  mounted: {
    getRequestToken() {
      this.getRequestToken();
    },
  },
};
</script>
