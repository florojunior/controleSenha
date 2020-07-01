<template>
    <v-content class="d-flex flex-grow-10">
        <v-container fluid style="height:100%;" :style="showHeader? 'padding-top: 60px;':'padding-top: 0px;'" class="pb-0">
          <v-row style="height:100%;" class="d-flex flex-row justify-center">
            <v-col class="pa-0 ma-0">

            </v-col>
          </v-row>
        </v-container> 
    </v-content>
</template>
<script>
  import LoginDialog from '../../components/login/LoginDialog';
  import { mapGetters, mapActions} from 'vuex';

  export default {
    components:{
      LoginDialog
    },
    data: () => ({
      show: true,
        carregando: false,
        mostrarDialogEntrar: false,
        bairros: [],
        bairroSelecionado: null
    }),
    name: 'home',
    components: {
      //'definir-endereco': definirEndereco
    },
    computed: {
      //...mapGetters('endereco', ['bairro'])
    },
    created() {
      //this.listarBairros();
      //if (this.bairro) {
        //this.$router.push({name: 'Categoria'});
      //}
    },
    watch: {
    },
    methods: {
      mudarValor(){
        this.setAutenticacao();

      },
      ...mapActions('principal',[
        'atualizarDadosUsuario',
        'setAutenticacao',
        'setBairroAnonimo',
        'mudarTab'
      ]),
      listarBairros(){
        this.carregando = true;
        this.$http.get('/cep/bairros/manaus').then(res => {
          this.carregando = false;
          this.bairros = res.data;
        });
      },
      procurarBairro (v) {
        this.carregando = true;
        this.bairrosFiltrados.filter((bairro)=>{
          return bairro.includes(v);
        })
      },
      irParaEscolherProdutos(){
        this.mudarTab("tab-2");
        this.$router.push({name: 'principal'});
      }
    }, 
    computed:{
      ...mapGetters('principal',[
        'dadosUsuario',
        'showHeader'  
      ]),
    }
  }
</script>
<style scoped>
  .custom-primary-color-text{
    color: #1565C0
  }
</style>
