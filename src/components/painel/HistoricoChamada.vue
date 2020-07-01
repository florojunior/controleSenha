<template>
  <v-row>
    <v-col cols="12" class="pa-0 pt-0">
        <v-card>
            <p class="text--secondary text-center font-weight-medium text-xl-h4 text-lg-h4 titulo-historico">Histórico de Chamados</p>
        </v-card>
    </v-col>
    <v-col cols="12" class="mt-0 pt-0" v-if="listaHistorico && listaHistorico.length > 0">
        <v-row class="cabecalho-tabela d-flex justify-space-around">
            <v-col cols="3">
                <p class="text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">Tipo Chamada</p>
            </v-col>
            <v-col cols="3">
                <p class="text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">Senha</p>
            </v-col>
            <v-col cols="3">
                <p class="text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">Sala</p>
            </v-col>
            <v-col cols="3">
                <p class="text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">Horário Chamada</p>
            </v-col>
        </v-row>
        <v-row  v-for="historico in listaHistorico" :key="historico.codigo" class="dados-tabela d-flex justify-space-around">
            <v-col cols="3">
                <p class="text--secondary text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">{{historico.tipoatendimento}}</p>
            </v-col>
            <v-col cols="3">
                <p class="text--secondary text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">{{historico.senha}}</p>
            </v-col>
            <v-col cols="3">
                <p class="text--secondary text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">{{historico.descricaoguiche}}</p>
            </v-col>
            <v-col cols="3">
                <p class="text--secondary text-center font-weight-medium text-xl-h3 text-lg-h5 titulo-historico mb-0">{{historico.horachamada}}</p>
            </v-col>
        </v-row>
    </v-col> 
  </v-row>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';


export default {
    computed:{
        ...mapGetters('principal',[
           'listaHistorico'  
        ]),
    }
}
</script>

<style>
    .titulo-historico{
        color:#01579B !important
    }
    .prioridade{
        
    }
    
</style>