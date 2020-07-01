export const getters = {
  dadosUsuario: (state) => {
    if(state.dadosUsuario || JSON.parse(window.localStorage.getItem('dadosUsuario'))){
      return state.dadosUsuario || JSON.parse(window.localStorage.getItem('dadosUsuario'));
    }else{
      return null;
    }
  },
  autenticado: (state) => {
    if(state.autenticado){
      return state.autenticado;       
    }else{
      return localStorage.getItem('autenticado_pediragoora');
    }
  },
  showHeader: (state) => {
    return state.showHeader;
  },
  listaHistorico: (state) =>{
    return state.listaHistorico;
  },
  senhaAtual: (state) =>{
    return state.senhaAtual;
  },
  guiche: (state) =>{
    if(localStorage.getItem('guiche') != null)
      return localStorage.getItem('guiche')

    return state.guiche;
  },
  showConfiguracao(state){
    return state.showConfiguracao;
  }
}
