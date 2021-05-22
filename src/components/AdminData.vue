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
          Atualizar status de contato
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
    <insert-observation v-show="toggleObservation"></insert-observation>
    <update-status v-show="toggleContacted"></update-status>
    <create-contact v-show="toggleCreate"></create-contact>
    <hr class="my-10" />
    <update-table></update-table>
    <load-data></load-data>
  </v-container>
</template>

<script>
import CreateContact from './AdminData/CreateContact';
import insertObservation from './AdminData/InsertObservation';
import UpdateStatus from './AdminData/UpdateStatus';
import UpdateTable from './AdminData/UpdateTable';
import LoadData from './AdminData/LoadData';
import BaseLargebtn from '../shared/BaseLayout/BaseLargebtn';
export default {
  components: {
    BaseLargebtn,
    CreateContact,
    insertObservation,
    UpdateStatus,
    UpdateTable,
    LoadData,
  },

  data() {
    return {
      newObservation: '',
      toggleObservation: false,
      toggleContacted: false,
      toggleCreate: false,
      error: undefined,
    };
  },
  methods: {
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
  },
};
</script>

<style></style>
