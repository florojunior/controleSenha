<template>
  <v-container fluid style="width: 100%; height: 100%" class="ma-0 pa-0 d-flex flex-column justify-space-between" >
      <div style="position: fixed; z-index: 42; width: 100%; background: white; flex-grow-1; height: 60px">
        <v-card>
          <v-row class="d-flex align-center justify-center ">
            <v-col class="d-flex align-center justify-start " >
              <p :class="$vuetify.breakpoint.smAndDown?'headline':'display-1'" class="font-weight-medium ma-0 pa-0 pr-2 pl-2 text--secondary">Controlador</p>
              <p :class="$vuetify.breakpoint.smAndDown?'headline':'display-1'" class="font-weight-bold ma-0 pa-0 custom-primary-color-text">Painel</p>
            </v-col>
            <v-col class="d-flex align-center justify-end pa-0 pt-1 mr-4 pr-2">
              <v-btn icon color="primary darken-3" @click="mostrarConfiguracoes()" class="mr-4">
                <v-icon large >mdi-cog-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          </v-card>
      </div>
      <v-row class="mr-2 mt-12 ml-2 d-flex flex-row justify-start" style="margin-top: 70px !important; margin-bottom: 100px !important;">
        <v-col cols="12" xl="4" lg="4" class="ma-0 pt-0 d-flex flex-column justify-center">
          <v-btn
            color="green darken-1"
            :loading="carregando"
            class="large-button" 
            @click="chamarProximo(false)"
            large
          ><v-icon color="white">
            mdi-bell-ring
          </v-icon>
            <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
              Próximo
            </p>  
          </v-btn>
        </v-col>
        <v-col cols="12" xl="4" lg="4" class="ma-0 pt-0 d-flex flex-column justify-center">
          <v-btn
            color="red darken-1"
            :loading="carregando"
            class="large-button" 
            @click="chamarProximo(true)"
            large
          ><v-icon color="white">
            mdi-bell-ring
          </v-icon>
            <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
              Prioridade
            </p>  
          </v-btn>
        </v-col>
        <v-col cols="12" xl="4" lg="4" class="ma-0 pt-0 d-flex flex-column justify-center">
          <v-btn
            color="primary darken-1" large
            :loading="carregando"
            class="large-button" 
            @click="rechamar()"
          >
          <v-icon color="white">
            autorenew
          </v-icon>
            <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
              Chamar
               Novamente
            </p>      
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div style="position: fixed; z-index: 42; width: 100%; background: white; flex-grow-1; bottom: 0">
        <v-divider></v-divider>
        <v-row style="max-height: 100px" class="ma-0 pa-0 pt-3">
          <v-col cols="12" class="d-flex justify-center ma-0 pa-0">
            <p class="text-center text-h6 pb-0 mb-4">Senha Atual</p>
            <p class="text-center font-weight-bold text-h6 pb-0  mb-0 ml-4">{{dataAtual}}</p>
          </v-col>
        </v-row>
      </div>
      <Configuracoes/>
  </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Configuracoes from '../views/Configuracoes';

export default {
  created(){
    if(this.guiche == null){
      this.mostrarConfiguracoes();
    }
  },
  data:()=>{
    return {
      dataAtual: ''
    }
  },
  components:{
    Configuracoes
  },
  methods:{
    ...mapActions('principal',['setGuiche','setShowConfiguracao']),
    chamarProximo(prioridade){
      this.$http.post('/atendimento-painel',{
        "codigoGuiche": parseInt(this.guiche),
        "senha": "",
        "codigoTipoAtendimento": prioridade? 2 : 1
      }).then(res => {
        this.dataAtual = res.data.senhaAtual;
      });
    },
    rechamar(){
      this.$http.get('/chamada-temporaria/?codigoGuiche='+this.guiche).then(res => {
      });
    },
    mostrarConfiguracoes(){
      this.setShowConfiguracao(true);
    }
  },
  computed:{
    ...mapGetters('principal',[
        'guiche'
      ]),
  }
}
</script>

<style>
  .large-button{
    width: 100%;
    min-height: 120px ;
  }
</style>