<template>
  <div class="card">
    <v-card class="mx-auto" max-width="100%">
      <v-card-text>
        <div class="header">
         <div> <h3>{{ order.Title }}</h3></div>
        </div>
        <div class="main">
          <div class="section">
            <div><h4>Адрес:</h4></div>
            <div>Адрес: {{ order.DeliveryAddress.AddressLine1 }}</div>
            <div>Город: {{ order.DeliveryAddress.City }}</div>
          </div>
          <div class="section">
            <div><h4>Цена:</h4> </div>
            <div>Начальная Цена: {{ order.Price }}</div>
            <div>Итоговая цена: {{ order.TotalPrice }}</div>
          </div>
          <div class="section">
              <div><h4>Доставка:</h4></div>
              <div>Название: {{ order.Shipping.Title }}</div>
              <div>Телефон: {{ order.Shipping.Phone }} </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    order: Object,
  },
};
</script>
<style scoped>
.card {
  margin-top: 1vh;
  margin-left: 20vw;
  margin-right: 20vw;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.section {
  display: flex;
  flex-direction: column;
  margin: 15px;
}
</style>
