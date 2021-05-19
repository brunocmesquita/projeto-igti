<template>
  <v-container>
    <v-row class="py-3">
      <v-col v-for="card in cards" :key="`${card.title}-card`" cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card
            color="grey lighten-3"
            :elevation="hover ? 12 : 2"
            outlined
            :class="{ 'on-hover': hover }"
            class=" d-flex align-content-start flex-wrap "
          >
            <v-card-title>
              <v-icon left color="black">{{ card.icon }}</v-icon>
              {{ card.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ card.subtitle }}
            </v-card-subtitle>
            <v-card-text>
              {{ card.text }}
            </v-card-text>
            <v-card-actions>
              <saibamais-dialog :title="card.title"></saibamais-dialog>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-center mt-4 mb-4">
          <v-btn
            dark
            color="red darken-3"
            rounded
            x-large
            elevation="10"
            to="/cotacao"
          >
            Peça uma cotação
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SaibamaisDialog from './SaibamaisDialog';
export default {
  data: () => ({
    cards: [
      {
        icon: 'mdi-car-hatchback',
        title: 'Seguro Auto',
        subtitle:
          'Seu carro merece a melhor proteção para você rodar tranquilo.',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste consequatur, modi sed laboriosam repellendus quas maiores laborum velit cum recusandae amet, ex sequi alias harum repellat nihil itaque suscipit!',
        button: 'Saiba Mais',
      },
      {
        icon: 'mdi-home',
        title: 'Seguro Residencial',
        subtitle:
          'Para casa ou apartamento, cobre riscos contra fogo, queda de raio e explosão.',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste consequatur, modi sed laboriosam repellendus quas maiores laborum velit cum recusandae amet, ex sequi alias harum repellat nihil itaque suscipit!',
        button: 'Saiba Mais',
      },
      {
        icon: 'mdi-account',
        title: 'Seguro de Vida',
        subtitle: 'Você e sua família protegidos para viver com tranquilidade.',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste consequatur, modi sed laboriosam repellendus quas maiores laborum velit cum recusandae amet, ex sequi alias harum repellat nihil itaque suscipit!',
        button: 'Saiba Mais',
      },
    ],
    // links: ['Login', 'Seguros', 'Sobre', 'Home'],
  }),
  components: {
    SaibamaisDialog,
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
