<template>
  <v-card class="grey lighten-3 mx-auto mb-10 px-5">
    <p class="pt-2">
      Selecione o ID do contato e clique no status a ser inserido:
    </p>
    <v-text-field
      dense
      label="Id do contato"
      v-model="idContacted"
    ></v-text-field>
    <v-radio-group v-model="statusUpdate" column>
      <v-radio label="Contactado" value="true"></v-radio>
      <v-radio label="Não contactado" value="false"></v-radio>
    </v-radio-group>
    <v-text-field
      dense
      label="Insira uma observação, caso necessário"
      v-model="newObservation"
    ></v-text-field>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary" @click="updateContacted">Atualizar status</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      idContacted: '',
      newObservation: '',
      insContacted: '',
      statusUpdate: '',
    };
  },
  methods: {
    updateContacted() {
      axios
        .put(`http://localhost:3333/contacts/contacted/${this.idContacted}`, {
          contacted: this.statusUpdate,
          observation: this.newObservation,
        })
        .then(() => {
          this.toggleContacted = false;
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
