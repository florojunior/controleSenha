import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/template/Home.vue';
import Painel from '../views/Painel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'nome',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/principal',
    name: 'principal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Principal.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/painel',
    name: 'painel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Painel.vue'),
  },
  {
    path: '/controlador',
    name: 'controlador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Controlador.vue'),
  },
  {
    path: '/controladorSenha',
    name: 'controladorSenha',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ControladorSenha.vue'),
  }
];

const router = new VueRouter({
  base:'http://90.0.3.227/painel/',
  routes,
});

export default router;
