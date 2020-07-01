<template>
  <transition>
    <div class="local d-flex flex-column justify-center" :class="senha.tipoatendimento=='Normal'? 'light-blue darken-3': 'red darken-1'" style="senha">
        <p class="font-weight-regular white--text mb-0 texto-senha">{{'Senha '+(senha.tipoatendimento ? senha.tipoatendimento: '')}}</p>
        <p class="font-weight-regular white--text texto-senha">{{'N° '+(senha.senha ? senha.senha: '')}}</p>
        <audio id="audiotag1" :src="require('../eventually.mp3')" preload="auto"></audio>
    </div>
  </transition>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    timers: {
        listarProximaChamada: { time: 10000, autostart: true, repeat: true }
    },
    data:()=>{
        return{
            senha: null
        }
    },
    created(){
    },
    props:{
    },
    watch:{
        senha(novo, antigo){
            if(novo.ativo == 'T'){
                //var promise = document.getElementById('audiotag1').play();
                /*if (promise !== undefined) {
                    promise.then(_ => {
                    }).catch(error => {
                    });
                };*/
            }
        }
    },
    methods:{
        log(){
        },
        ...mapActions('principal',[
            'setSenhaAtual'
        ]),
        listarProximaChamada(){
            this.$http.get('/atendimento-painel-atual').then(res => {
                console.log('retorno painel atual');
                if(res.data.length > 0){
                    this.senha = res.data[0];
                    this.setSenhaAtual(this.senha);
                    if(this.senha.ativo == 'T'){
                        this.enviarConfirmacao();
                    }
                }
            });
        },
        enviarConfirmacao(){
            this.$http.put('/atendimento-painel-atual',{
                codigo: this.senha.codigo
            }).then();
        }
    }
}
</script>

<style>
    .local{
        height: 100%;
    }
    .texto-senha{
        font-size:  6vw;
        line-height: 6vw;
        text-align: center;
    }
</style>