<template>
  <v-card class="grey lighten-3">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="contacts"
      :items-per-page="5"
      :search="search"
      class="elevation-1 grey lighten-3 text-lg-h6"
    >
    </v-data-table>
  </v-card>
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
      .get('http://localhost:3333/contacts', req)
      .then(res => {
        this.contacts = res.data;
      })
      .catch(err => console.log(err));
    console.log('Olá');
  },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: true,
          value: 'name',
          class: 'text-uppercase',
        },
        { text: 'Email', value: 'email', class: 'text-uppercase' },
        { text: 'Telefone', value: 'phone', class: 'text-uppercase' },
        { text: 'Seguro', value: 'insurance', class: 'text-uppercase' },
        { text: 'Observação', value: 'observation', class: 'text-uppercase' },
      ],
      contacts: [],
    };
  },
};
</script>

<style></style>
