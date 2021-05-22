<template>
  <v-carousel height="300" class="mt-5">
    <v-carousel-item>
      <v-sheet color="grey lighten-2" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-center red--text text-darken-2 text-h5 px-15">
            {{ msgElton }}
            <br />
            <br />
            <p class="overline text-right">Elton Pereira</p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item>
      <v-sheet color="grey lighten-2" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="title text-center red--text text-darken-2 text-h5 px-15">
            {{ msgJoao }}<br />
            <br />
            <p class="overline text-right">João Castellano</p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    msgElton: String,
    msgJoao: String,
  },
};
</script>
<style></style>
