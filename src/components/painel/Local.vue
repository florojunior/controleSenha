<template>
  <div class="local d-flex flex-column justify-center" style="senha">
    <p class="font-weight-regular mb-0" :class="senhaAtual.tipoatendimento=='Normal'? 'texto-local-titulo': 'texto-local-titulo-prioridade'" style="senha">Local</p>
    <p class="font-weight-regular texto-local-descricao text--secondary">{{senhaAtual.descricaoguiche}}</p>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters('principal',[
           'senhaAtual',
        ]),
    }
}
</script>

<style>
    .texto-local-titulo{
        font-size: 6vw;
        line-height: 6vw;
        text-align: center;
        color: #0277BD !important;
    }

    .texto-local-descricao{
        font-size: 6vw;
        line-height: 6vw;
        text-align: center;
    }

    .texto-local-titulo-prioridade{
        font-size: 6vw;
        line-height: 6vw;
        text-align: center;
        color: #e53935 !important;
    }
</style>