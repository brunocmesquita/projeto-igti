<template>
  <v-card class="grey lighten-3 mx-auto mb-10 px-5">
    <p class="pt-2">
      Informe os dados para inserção de contato
    </p>
    <v-text-field dense label="Nome" v-model="nameContact"></v-text-field>
    <v-text-field dense label="E-mail" v-model="emailContact"></v-text-field>
    <v-text-field dense label="Telefone" v-model="phoneContact"></v-text-field>
    <v-select
      :items="items"
      v-model="insuranceContact"
      label="Seguro"
    ></v-select>
    <v-text-field
      dense
      label="Insira uma observação, caso necessário"
      v-model="observationContact"
    ></v-text-field>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="primary" @click="createContact">Inserir contato</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: ['Auto', 'Residencial', 'Vida'],
      nameContact: '',
      emailContact: '',
      phoneContact: '',
      insuranceContact: '',
      observationContact: '',
    };
  },
  methods: {
    createContact() {
      axios
        .post('http://localhost:3333/contacts', {
          name: this.nameContact,
          email: this.emailContact,
          phone: this.phoneContact,
          insurance: this.insuranceContact,
          observation: this.observationContact,
        })
        .then(() => {
          this.error = false;
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
