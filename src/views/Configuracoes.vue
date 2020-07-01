<template>
  <v-dialog max-width="600px"
      persistent 
      v-model="showConfiguracao">
          <v-card>
              <v-card-title class="d-flex justify-space-between">
                  <p class="mb-0 pb-0">Configurações</p>
                  <v-btn
                        color="primary darken-3" small=""
                        icon
                        @click="fechar()"
                    >
                        <v-icon color="primary" >
                         mdi-close
                        </v-icon>      
                    </v-btn>
              </v-card-title>
              <v-card-text>
                  <v-row>
                    <v-col cols="12">
                        <v-select
                            :items="listaGuiche"
                            v-model="numeroGuiche"
                            label="Seleciona um guichê"
                            item-text="descricao"
                            item-value="codigo"
                            outlined
                            ></v-select>
                    </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-row class="ma-0 pa-0">
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn
                            color="primary"
                            @click="salvar()"
                        >
                            Salvar
                        </v-btn>
                    </v-col>
                </v-row>
              </v-card-actions>
          </v-card>
  </v-dialog>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    created(){
        this.numeroGuiche = parseInt(this.guiche?this.guiche:0);
        this.carregarListaGuiches();
    },
    data:()=>{
        return {
            numeroGuiche: '',
            mostrar: true,
            listaGuiche: []
        }
    }, 
    computed:{
        ...mapGetters('principal',[
            'guiche',
            'showConfiguracao'
        ]),
    }, 
    watch:{
        guiche(novo, antigo){
            this.numeroGuiche = this.novo;
        }
    }, 
    methods:{
        ...mapActions('principal',[
            'setShowConfiguracao',
            'setGuiche'
        ]),
        fechar(){
            this.setShowConfiguracao(false);
        },
        salvar(){
            this.setGuiche(this.numeroGuiche);
            this.fechar();
        },
        carregarListaGuiches(){
            this.$http.get('/guiche').then(res => {
                if(res.data){
                this.listaGuiche = res.data;
                
                }
            });
        },
        ...mapActions('principal',['setGuiche','setShowConfiguracao'])
    }
}
</script>

<style>

</style>