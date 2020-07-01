<template>
  <header style="position: fixed; z-index: 42; width: 100%; background: white; flex-grow-1; height: 60px" v-if="showHeader">
      <v-row class="d-flex align-center justify-center " v-if="autenticado">
        <v-col class="d-flex align-center justify-start " >
          <p :class="$vuetify.breakpoint.smAndDown?'headline':'display-1'" class="font-weight-medium ma-0 pa-0 pr-2 pl-2 text--secondary">Pedir</p>
          <p :class="$vuetify.breakpoint.smAndDown?'headline':'display-1'" class="font-weight-bold ma-0 pa-0 custom-primary-color-text">Agora</p>
        </v-col>
        <v-col class="d-flex align-center justify-end pa-0 pt-1 pr-4">
          <p class="font-weight-bold ma-0 pa-0 pr-2 pl-2 text--secondary text-capitalize text-overline text-xl-h6 text-xl-h5 text-lg-h6 text-md-subtitle-1">{{dadosUsuario.nome}}</p>
        </v-col>
        <v-col class="d-flex align-center justify-end pa-0 pt-1 pr-4">
          <v-btn text @click="realizarLogout()" color="primary darken-3">
            <p :class="$vuetify.breakpoint.smAndDown?'subtitle-2':'subtitle-1'" class="font-weight-bold mb-0 text-capitalize">
              Logout
            </p>        
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center " v-if="!autenticado">
        <v-col class="d-flex align-center justify-start " >
          <p :class="$vuetify.breakpoint.smAndDown?'headline':'display-1'" class="font-weight-medium ma-0 pa-0 pr-2 pl-2 text--secondary">Painel</p>
          <p :class="$vuetify.breakpoint.smAndDown?'headline':'display-1'" class="font-weight-bold ma-0 pa-0 custom-primary-color-text">Hemoam</p>
        </v-col>
        <v-col class="d-flex align-center justify-end pa-0 pt-1 mr-4 pr-2">
          <v-btn @click="mostrarDialogEntrar = true" :color="$vuetify.breakpoint.smAndDown?'white darken-3':'orange  darken-3'" :small="$vuetify.breakpoint.smAndDown" :fab="$vuetify.breakpoint.smAndDown">
            <p v-if="!$vuetify.breakpoint.smAndDown" :class="$vuetify.breakpoint.smAndDown?'subtitle-2':'subtitle-1'" class="font-weight-bold mb-0 white--text">
              Login 
            </p>
            <v-icon v-if="$vuetify.breakpoint.smAndDown" :color="$vuetify.breakpoint.smAndDown?'orange':'white'">
              mdi-account
            </v-icon>        
          </v-btn>
        </v-col>
        <login v-if="mostrarDialogEntrar" v-on:fecharDialog="mostrarDialogEntrar = false" />
      </v-row>
      <Configuracoes/>
  </header>
</template>

<script>
import LoginDialog from '../../components/login/LoginDialog.vue';
import { mapGetters, mapActions } from 'vuex';
import Configuracoes from '../Configuracoes.vue';

export default {
  components:{
    Configuracoes
  },
  data: () => ({
      carregando: false,
      mostrarDialogEntrar: false,
      bairros: [],
      bairroSelecionado: {}
  }),
  name: 'Header',
  components: {
    'login': LoginDialog
  },
  computed: {      
    ...mapGetters('principal',[
      'dadosUsuario',
      'autenticado',
      'showHeader'
    ]),
    bairro() {
      return this.$store.getters['endereco/bairro'];
    }
  },
  methods:{
    ...mapActions('principal',[
      'logout',
      'mudarTab'
    ]),
    realizarLogout(){
      this.logout();
    },
    fecharDialogLogin(){
      
    },
    realizarNovoCadastro(){
      this.mudarTab('tab-1');
      this.$router.push({name: 'principal'},{});
    }
  },
  watch:{
    dialogLoginAberto(novo, antigo){
      this.mostrarDialogEntrar = true;
    }
  }

};
</script>

<style scoped>
  header{
    -webkit-box-shadow: 0px 22px 4px -2px rgba(71,70,71,1);
-moz-box-shadow: 0px 22px 4px -2px rgba(71,70,71,1);
box-shadow: 0px 5px 4px -2px rgba(71,70,71,1);
  }
</style>
