<template>
  <v-app>
    <v-app-bar app color="grey lighten-3" flat>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        max-height="50"
        max-width="50"
        src="./assets/justLogo.png"
        position="center"
      ></v-img>
      <v-app-bar-title class="pl-3 text-uppercase red--text text--darken-3">
        <span> Casper</span>
        <span class="font-weight-light">Seguros</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2 d-none d-sm-flex red--text text--darken-3"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="link in links"
            :key="`${link.label}-footer-link`"
            :to="link.url"
          >
            <v-list-item-title class="text-subtitle-1">{{
              link.label
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="red lighten-2" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
          :prepend-icon="link.icon"
        >
          {{ link.label }}
        </v-btn>

        <v-col class="red darken-3 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Casper Seguros</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    links: [
      { label: 'Home', url: '/' },
      { label: 'Sobre', url: '/sobre' },
      { label: 'Login', url: '/login', icon: 'mdi-lock' },
    ],
    // links: ['Login', 'Seguros', 'Sobre', 'Home'],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
