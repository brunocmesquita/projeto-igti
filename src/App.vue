<template>
  <v-app>
    <app-bar></app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <base-footer></base-footer>
  </v-app>
</template>

<script>
import AppBar from './shared/BaseLayout/AppBar';
import BaseFooter from './shared/BaseLayout/BaseFooter';
export default {
  components: {
    AppBar,
    BaseFooter,
  },
};
</script>
