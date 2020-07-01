<template>
    <v-container fluid style="height:100%" class="pt-0 pr-0 mt-0">
        <div class="painel-principal">
            <div class="painel-superior mb-1">
                <v-card tile style="width: 100%" class="painel-superior-row" >
                    <v-row class="painel-superior-row">
                        <v-col cols="6" class="pa-0">
                            <Senha/>
                        </v-col>
                        <v-col cols="6"  class="pa-0">
                            <Local/>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <div class="painel-superior mb-1">
                <HistoricoChamada/>
            </div>
        </div>
    </v-container>
</template>

<script>
import Senha from '../components/painel/Senha'
import Local from '../components/painel/Local'
import HistoricoChamada from '../components/painel/HistoricoChamada'
import { mapGetters, mapActions } from 'vuex';


export default {
    timers: {
        listarChamadas: { time: 10000, autostart: true, repeat: true }
    },
    data:()=>{
        return{
            senhaChamada: null
        }
    },
    methods:{
        ...mapActions('principal',[
            'setHistorico'
        ]),
        listarChamadas(){
            this.$http.get('/atendimento-painel-historico').then(res => {
                if(res.data)
                this.setHistorico(res.data);
            });
        }
    },

    components:{
        Local,
        Senha,
        HistoricoChamada
    },
    computed:{
        ...mapGetters('principal',[
           'listaHistorico'  
        ]),
    }
}
</script>

<style>
.painel-superior{
    height: 40%
}

.painel-inferior{
    height: 60%
}
.painel-superior-row{
    height: 100%
}
.painel-inferior-row{
    height: 100%
}

.painel-principal{
    height: 100%
}
</style>