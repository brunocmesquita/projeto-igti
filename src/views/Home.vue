<template>
  <div class="home">
    <welcome-card></welcome-card>
    <v-divider></v-divider>
    <home-card
      :title="'Seguro Auto'"
      :icon="'mdi-car'"
      :subtitle="
        'Seu carro merece a melhor proteção para você rodar tranquilo.'
      "
      :text="
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste consequatur, modi sed laboriosam repellendus quas maiores laborum velit cum recusandae amet, ex sequi alias harum repellat nihil itaque suscipit!'
      "
      :button="'Saiba Mais'"
    ></home-card>

    <home-carousel
      :msgElton="
        'Não queremos apenas vender seguros e consórcios, sabemos da grande conquista de nossos clientes e da necessidade de resguardar seus bens!'
      "
      :msgJoao="
        'Nós da Casper Seguros procuramos atender nossos clientes e amigos sempre que precisarem de um auxílio. Contem conosco!'
      "
    ></home-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCarousel from '../components/HomeCarousel.vue';
import HomeCard from '../components/HomeCard.vue';
import WelcomeCard from '../components/WelcomeCard.vue';

export default {
  name: 'Home',
  components: {
    HomeCard,
    HomeCarousel,
    WelcomeCard,
  },
};
</script>
