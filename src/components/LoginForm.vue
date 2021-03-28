<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5 grey lighten-3">
      <v-card-title>
        <h1 class="display-1">Login</h1>
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
            label="E-mail"
            v-model="email"
            prepend-icon="mdi-email"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="red darken-3" dark to="/register">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red darken-3" dark @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      password: '',
      email: '',
      error: undefined,
      showPassword: false,
    };
  },
  methods: {
    login() {
      axios
        .post('http://localhost:8686/login', {
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          this.$router.push({ name: 'PainelAdmin' });
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
