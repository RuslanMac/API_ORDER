<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <h1>Страница заказов </h1>
    
  

      <v-spacer></v-spacer>

      <v-btn
      color="primary"
      >
        <span class="mr-2">Страница заказов</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
