import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import axios from 'axios';

function AdminAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {
    let req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios
      .post('http://localhost:3333/sessions/validate', {}, req)
      .then(() => {
        next();
      })
      .catch(err => {
        console.log(err.response);
        next('/login');
      });
    next();
  } else {
    next('/login');
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin/painel',
    name: 'PainelAdmin',
    component: () => import('../views/admin/PainelAdmin.vue'),
    beforeEnter: AdminAuth,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/cotacao',
    name: 'Cotacao',
    component: () => import('../views/Cotacao.vue'),
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:notFound(.*)',
    name: 'Not Found',
    component: () => import('../components/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
