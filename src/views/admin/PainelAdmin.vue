<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card
          color="grey lighten-3"
          v-for="contact in contacts"
          :key="contact.id"
          elevation="3"
          class="mt-4"
          width="800"
        >
          <v-card-title>Painel Administrador</v-card-title>
          <v-card-text
            ><span class="title">Nome:</span> {{ contact.name }}</v-card-text
          >
          <v-card-text
            ><span class="title">E-mail:</span> {{ contact.email }}</v-card-text
          >
          <v-card-text
            ><span class="title">Telefone:</span>
            {{ contact.fone }}</v-card-text
          >
          <v-card-text
            ><span class="title">Seguro:</span>
            {{ contact.insurance }}</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    let req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    axios
      .get('http://localhost:8686/contact', req)
      .then((res) => {
        console.log(res);
        this.contacts = res.data;
      })
      .catch((err) => console.log(err));
    console.log('Olá');
  },
  data() {
    return {
      contacts: [],
    };
  },
};
</script>

<style></style>
