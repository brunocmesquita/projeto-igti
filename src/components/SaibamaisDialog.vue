<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="900">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red darken-3" dark v-bind="attrs" v-on="on"
            >Saiba Mais!</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              class="text-h5 font-weight-bold"
              color="red darken-3"
              dark
              >{{ title }}</v-toolbar
            >
            <v-card-text>
              <v-row align="center"
                ><v-col class="">
                  <div class="pa-12">
                    <v-img
                      lazy-src="../assets/casper.jpeg"
                      max-height="250"
                      max-width="350"
                      src="../assets/casper.jpeg"
                    ></v-img>
                  </div>
                </v-col>
                <v-col
                  ><div class=" text-h5 pa-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ducimus eveniet nemo ullam ipsa maiores molestiae, iure,
                    repellendus dolores nam, laborum reprehenderit cumque vitae
                    facere doloribus quod distinctio. Enim, adipisci rerum?
                  </div></v-col
                >
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn dark color="red darken-3">Peça uma cotação</v-btn>
              <v-spacer></v-spacer>
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['title'],
};
</script>
