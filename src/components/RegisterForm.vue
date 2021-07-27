<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5 grey lighten-3">
      <v-card-title>
        <h1 class="display-1">Register</h1>
      </v-card-title>
      <v-card-text
        >Cadastro permitido apenas para colaboradores da Casper
        Seguros.</v-card-text
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
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            label="E-mail"
            v-model="email"
            prepend-icon="mdi-email"
            :rules="[rules.required, rules.email]"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
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
      name: '',
      password: '',
      email: '',
      error: undefined,
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },
  methods: {
    register() {
      axios
        .post('http://localhost:3333/users', {
          name: this.name,
          password: this.password,
          email: this.email,
        })
        .then(res => {
          console.log(res);
          this.$router.push({ name: 'Login' });
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
