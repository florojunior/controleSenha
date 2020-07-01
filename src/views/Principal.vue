<template>
  <v-content class="d-flex flex-grow-10" style="margin-top: 61px" >
    <v-container fluid style="height:100%;" class="pa-0">
      
    </v-container> 
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created(){
    if(this.tab){
      this.tabAtual = this.tab;
    }
  },
  components:{
    Identificacao
  },
  data () {
    return {
      tabAtual: ''
    }
  },
  methods: {
    ...mapActions('principal',[
        'mudarTab'
      ]),
  },
  computed:{
    ...mapGetters('principal',[
      'tab'  
    ]),
  }, 
  watch:{
    tab(novo, antigo){
      this.tabAtual = novo;
    },
    tabAtual(novo, antigo){
      this.mudarTab(novo);
    }
  }
}
</script>

<style>

</style>