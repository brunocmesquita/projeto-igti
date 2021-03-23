<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5 grey lighten-3">
      <v-card-title>
        <h1 class="display-1">Register</h1>
      </v-card-title>
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
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-3" dark>Cadastrar</v-btn>
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
    };
  },
  methods: {
    register() {
      axios
        .post('http://localhost:8686/user', {
          name: this.name,
          password: this.password,
          email: this.email,
        })
        .then(() => {
          this.$router.push({ name: 'Login' });
        })
        .catch((error) => {
          let msgError = error.response.data.err;
          this.error = msgError;
        });
    },
  },
};
</script>

<style></style>
