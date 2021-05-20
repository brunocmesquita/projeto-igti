<template>
  <v-container>
    <v-card class="py-4 grey lighten-3 mb-3">
      <v-card-actions class="px-5">
        <v-spacer></v-spacer>
        <base-largebtn @event="toggleInsertObservation">
          Inserir observação
        </base-largebtn>
        <base-largebtn @event="toggleCreateContact">
          Novo Contato
        </base-largebtn>
        <base-largebtn @event="toggleInsertContacted">
          Marcar Contato
        </base-largebtn>
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
        v-model="idContacted"
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
    <v-card v-show="toggleCreate" class="grey lighten-3 mx-auto mb-10 px-5">
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
  </v-container>
</template>

<script>
import BaseLargebtn from '../shared/BaseLayout/BaseLargebtn';
import axios from 'axios';
export default {
  components: {
    BaseLargebtn,
  },
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
      idContacted: '',
      newObservation: '',
      toggleObservation: false,
      toggleContacted: false,
      toggleCreate: false,
      error: undefined,
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
    insertContacted() {
      axios
        .put(`http://localhost:3333/contacts/contacted${this.idContacted}`, {
          contacted: true,
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
        this.toggleContact = false;
      }
    },
    toggleInsertContacted() {
      this.toggleContacted = !this.toggleContacted;
      if (this.toggleContacted) {
        this.toggleCreate = false;
        this.toggleObservation = false;
      }
    },
    toggleCreateContact() {
      this.toggleCreate = !this.toggleCreate;
      if (this.toggleCreate) {
        this.toggleContacted = false;
        this.toggleObservation = false;
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
