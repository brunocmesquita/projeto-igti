<template>
  <v-container>
    <v-card width="700" class="mx-auto mt-5 grey lighten-3">
      <v-card-title>
        <h1 class="display-1">Formulário de contato</h1>
      </v-card-title>
      <v-card-text class="text-h6"
        >Solicite aqui a cotação para o seu seguro</v-card-text
      >
      <v-card-text>
        <v-alert
          v-if="error != undefined"
          class="font-weight-bold red--text red lighten-4"
        >
          {{ error }}
        </v-alert>
        <v-form>
          <v-text-field
            label="Nome"
            v-model="name"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            label="E-mail"
            v-model="email"
            prepend-icon="mdi-email"
            :rules="[rules.required, rules.email]"
          />
          <v-text-field
            label="Número de telefone"
            v-model="fone"
            prepend-icon="mdi-cellphone"
            type="number"
            counter="11"
          />
          <v-select
            :items="items"
            v-model="insurance"
            label="Seguro"
            prepend-icon="mdi-briefcase"
          ></v-select>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn icon color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red darken-3" dark @click="register">Cadastrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: ['Auto', 'Residencial', 'Vida'],
      name: '',
      email: '',
      fone: '',
      insurance: '',
      error: undefined,
      showPassword: false,
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },
  methods: {
    register() {
      axios
        .post('http://localhost:8686/contact', {
          name: this.name,
          fone: this.fone,
          email: this.email,
          insurance: this.insurance,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: 'Home' });
        })
        .catch((err) => {
          let msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
};
</script>

<style></style>
