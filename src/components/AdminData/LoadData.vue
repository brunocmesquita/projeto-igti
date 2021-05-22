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
      :items-per-page="10"
      :search="search"
      class="elevation-1 grey lighten-3 "
    >
      <template v-slot:[`item.contacted`]="{ item }">
        <v-simple-checkbox
          v-model="item.contacted"
          disabled
        ></v-simple-checkbox>
      </template>
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
  },
  data() {
    return {
      search: '',
      contacts: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Nome', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Telefone', value: 'phone' },
        { text: 'Seguro', value: 'insurance' },
        { text: 'Observação', value: 'observation' },
        { text: 'Contato', value: 'contacted' },
      ],
    };
  },
};
</script>

<style></style>
