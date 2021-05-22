<template>
  <v-btn
    color="primary"
    class="mx-auto d-flex justify-center my-4"
    @click="updateTable"
    >Atualizar tabela</v-btn
  >
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    updateTable() {
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
  },
};
</script>

<style></style>
