<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5 grey lighten-3">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field label="E-mail" prepend-icon="mdi-email" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="red darken-1" dark to="/register">Cadastro</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red darken-3" dark>Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
<style></style>
