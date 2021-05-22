<template>
  <v-card class="grey lighten-3 mx-auto mb-10 px-5">
    <p class="pt-2">
      Selecione o ID do contato que deseja inserir uma observação
    </p>
    <v-text-field
      dense
      label="Id do contato"
      v-model="idObservation"
    ></v-text-field>
    <v-text-field
      dense
      label="Insira a observação"
      v-model="newObservation"
    ></v-text-field>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary" @click="insertObservation"
        >Inserir observação</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      idObservation: '',
      newObservation: '',
    };
  },
  methods: {
    insertObservation() {
      axios
        .put(`http://localhost:3333/contacts/${this.idObservation}`, {
          observation: this.newObservation,
        })
        .then(() => {
          this.toggleObservation = false;
        })
        .catch(err => {
          let msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
};
</script>

<style></style>
