<template>
  <v-app>
    <app-header></app-header>

    <router-view />

    <app-footer></app-footer>
  </v-app>
</template>
<script>
import header from './views/template/Header';
import Home from './views/template/Home';
import footer from './views/template/Footer';

export default {
  name: 'App',
  components: {
    'app-header': header,
    'app-footer': footer,
  },
};
</script>
<style>
  body {
    margin: 0;
    font-family: Metropolis,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #687281;
    text-align: left;
    background-color: #fff;
    max-height: 100%;
  }

  .custom-primary-color-text{
    color: #1565C0
  }
</style>
