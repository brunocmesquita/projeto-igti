<template>
  <v-container>
    <v-card class="py-4 grey lighten-3 mb-3">
      <v-card-actions class="px-5">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          large
          class="mx-2"
          @click="toggleInsertObservation"
          >Inserir observação</v-btn
        >
        <v-btn color="primary" large class="mx-2" @click="toogleCreateContact"
          >Novo Contato</v-btn
        >
        <v-btn class="mx-2" color="primary" large @click="toggleInsertContacted"
          >Marcar Contato</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <v-alert
      v-if="error != undefined"
      class="font-weight-bold red--text red lighten-4"
    >
      {{ error }}
    </v-alert>
    <v-card
      v-show="toggleObservation"
      class="grey lighten-3 mx-auto mb-10 px-5"
    >
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
    <v-card v-show="toggleContacted" class="grey lighten-3 mx-auto mb-10 px-5">
      <p class="pt-2">
        Selecione o ID do contato que deseja marcar como contactado
      </p>
      <v-text-field
        dense
        label="Id do contato"
        v-model="idObservation"
      ></v-text-field>
      <v-text-field
        dense
        label="Insira uma observação, caso necessário"
        v-model="newObservation"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary" @click="insertObservation"
          >Inserir observação</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card v-show="toggleContact" class="grey lighten-3 mx-auto mb-10 px-5">
      <p class="pt-2">
        Informe os dados para inserção de contato
      </p>
      <v-text-field dense label="Nome" v-model="nameContact"></v-text-field>
      <v-text-field dense label="E-mail" v-model="emailContact"></v-text-field>
      <v-text-field
        dense
        label="Telefone"
        v-model="phoneContact"
      ></v-text-field>
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
    <hr class="my-10" />
    <v-btn
      color="primary"
      class="mx-auto d-flex justify-center my-4"
      @click="updateTable"
      >Atualizar tabela</v-btn
    >
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
      .get('http://localhost:3333/contacts', req)
      .then(res => {
        this.contacts = res.data;
      })
      .catch(err => console.log(err));
  },
  data() {
    return {
      items: ['Auto', 'Residencial', 'Vida'],
      search: '',
      nameContact: '',
      emailContact: '',
      phoneContact: '',
      insuranceContact: '',
      observationContact: '',
      idObservation: '',
      newObservation: '',
      toggleObservation: false,
      toggleContacted: false,
      toggleContact: false,
      error: undefined,
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id',
          class: 'text-uppercase',
        },
        { text: 'Nome', value: 'name', class: 'text-uppercase' },
        { text: 'Email', value: 'email', class: 'text-uppercase' },
        { text: 'Telefone', value: 'phone', class: 'text-uppercase' },
        { text: 'Seguro', value: 'insurance', class: 'text-uppercase' },
        { text: 'Observação', value: 'observation', class: 'text-uppercase' },
      ],
      contacts: [],
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
    toggleInsertObservation() {
      this.toggleObservation = !this.toggleObservation;
      if (this.toggleObservation) {
        this.toggleContacted = false;
        this.toogleContact = false;
      }
    },
    toggleInsertContacted() {
      this.toggleContacted = !this.toggleContacted;
      if (this.toggleContacted) {
        this.toggleObservation = false;
        this.toogleContact = false;
      }
    },
    toogleCreateContact() {
      this.toggleContact = !this.toggleContact;
      if (this.toogleContact) {
        this.toggleObservation = false;
        this.toggleContacted = false;
      }
    },
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
