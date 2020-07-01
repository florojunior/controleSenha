<template>
  <v-dialog max-width="600px"
      persistent 
      v-model="dialogAberto">
      <v-card>
        <v-card-title class="headline primary d-flex justify-space-between" color="primary" >
          <p class="text-center white--text mb-0 custom-primary-color-text">
              Para iniciarmos
          </p>
          <v-btn
            color="red darken-3" large
            :loading="carregando" 
            @click="fechar()"
            icon
          >
          <v-icon right color="white">
            mdi-close</v-icon>       
          </v-btn>
        </v-card-title>

        <v-card-text class="pb-0 pt-4">
          <v-form
            ref="form"
            v-model="formValidated"
            lazy-validation
          >
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                <v-text-field
                  color="primary"
                  :disabled="redefineSenha"
                  v-model="telefoneComMascara"
                  label="Qual seu telefone"
                  :rules="requiredRule"
                  placeholder="Digite seu telefone"
                  v-mask="mascaraTelefone"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-if="!redefineSenha"
                  color="primary"
                  v-model="modelo.senha"
                  label="Qual sua senha"
                  placeholder="Digite sua senha"
                  type="password"
                  outlined
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-if="redefineSenha"
                  v-model="modelo.codigoAcesso"
                  label="Digite o código recebido"
                  placeholder="Código de Acesso"
                  outlined
                ></v-text-field>
              </v-col>       
            </v-row>
            <v-row>
              <v-col class="pt-0" cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                <v-text-field
                  color="primary"
                  v-if="redefineSenha"
                  v-model="modelo.senha"
                  label="Qual sua senha"
                  placeholder="Digite sua senha"
                  type="password"
                  required
                  :rules="requiredRule"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col class="pt-0" cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                  <v-text-field
                  color="primary"
                  v-if="redefineSenha"
                  v-model="modelo.confirmaSenha"
                  label="Repita sua senha"
                  placeholder="Confirmação de Senha"
                  required
                  :rules="confirmPasswordErrors && requiredRule"
                  :error-messages="confirmPasswordErrors" 
                  type="password"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="pt-0 mb-4 ">
          <div class="pa-4 pt-0 d-flex justify-space-between" style="width: 100%" v-if="!redefineSenha">
              <v-btn
                large
                :loading="carregando" 
                @click="soliticarCodigoAcesso()"
                text
                color="primary darken-3"
                class="pl-0"
              >
                <p class="button text-capitalize mb-0 botao-esqueci-senha" >
                  Esqueci minha senha
                </p>
                <v-icon right color="white" outlined>
                  mdi-login
                </v-icon>      
              </v-btn>
              <v-btn
                color="green darken-3" large
                :loading="carregando" 
                @click="logar()"
              >
                <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
                  Logar
                </p>
                <v-icon right color="white" outlined>
                  mdi-login
                </v-icon>      
              </v-btn>
          </div>
          <div class="mb-4 mr-4 ml-4 pt-0 pb-0 d-flex justify-space-between" style="width: 100%" v-if="redefineSenha" >
              <v-btn
                color="red darken-3" large
                :loading="carregando" 
                @click="voltarParaLogin()"
              >
                <v-icon left color="white">
                  mdi-arrow-left
                </v-icon>     
                <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
                  Voltar
                </p>
                 
              </v-btn>
              <v-btn
                color="primary darken-3" large
                :loading="carregando" 
                @click="redefinirSenha()"
              >
                <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
                  Refenir Senha
                </p>
                <v-icon right color="white" >
                  mdi-check
                </v-icon>      
              </v-btn>
         </div>      
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>

import { mask } from 'vue-the-mask';
import { mapGetters, mapActions } from 'vuex';


export default {
    created(){
      if(this.loginTelefone){
        this.telefoneComMascara = this.loginTelefone;
      }
    },
    data: () => ({
        carregando: false,      
        mostrarDialog: true,
        modelo: {},
        mascaraTelefone: '(##)#####-####',
        telefoneComMascara: '',
        redefineSenha: false,
        requiredRule: [
          v => !!v || 'Campo é requirido'
        ],
        formValidated : null, 
    }),
    directives: {
        mask
    },
    methods:{
      ...mapActions('principal',[
        'atualizarDadosUsuario',
        'setAutenticacao',
        'mudarTab',
      ]),
      logar(){
        this.carregando = true;
        this.modelo.login = this.telefoneSemMascara;
        this.$http.post('/cliente/telefoneSenha', this.modelo).then(res => {
          if(res.data.messageError){
            alert(res.data.messageError);
          }else{
            this.setAutenticacao();
            this.atualizarDadosUsuario(res.data.cliente);
            this.$emit('fecharDialog');
            this.mudarTab('tab-2');
            this.$router.push({name: 'principal'},{});
          }
          
        }).finally(()=>{
          this.carregando = false;
        })
      },
      soliticarCodigoAcesso(){
        if(this.$refs.form.validate()){
          this.carregando = true;
          this.modelo.login = this.telefoneSemMascara;
          this.$http.get('/cliente/enviarCodigoAcesso/cadastroExistente/'+this.telefoneSemMascara).then(res => {
            if(res.data.messageError){
              alert(res.data.messageError);
            }else{
              this.redefineSenha = true;
            }
          }).finally(()=>{
            this.carregando = false;
          })
        }
      },
      redefinirSenha(){
        if(this.$refs.form.validate()){
          this.carregando = true;
          this.$http.post('/cliente/atualizarSenha/comCodigoAcesso',this.modelo).then(res => {
            if(res.data.messageError){
              alert(res.data.messageError);
            }else{
              alert('Operação realizada com sucesso');
              this.redefineSenha = false;
            }
          }).finally(()=>{
            this.carregando = false;
          })
        }
      },
      fechar(){
        this.$emit('fecharDialog');
      },
      voltarParaLogin(){
        this.redefineSenha = false;
      }
    },
    computed:{
      ...mapGetters('principal',[
        'dialogLoginAberto',
        'loginTelefone'
      ]),
      telefoneSemMascara(){
        return this.telefoneComMascara.replace("(","").replace(")","").replace("-","");
      },
      numeros(){
        return [0,1,2,3,4,5,6,7,8,9];
      },
      dialogAberto(){
        return true;
      },
      confirmPasswordErrors() {
        const errors = [];
        if (this.modelo.senha != this.modelo.confirmaSenha) {
            errors.push('Valores de senha devem ser iguais!');
        } 
        return errors;
      }
    }, 
    watch:{
      loginTelefone(novo, antigo){

        console.log('chamou watch');
        this.telefoneSemMascara = novo;
      }
    }
}
</script>

<style>
  .botao-esqueci-senha{
    border-bottom-color: var(--v-primary-base);
    border-bottom-style: groove;
    border-width: thin;
  }
</style>