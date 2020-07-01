export const mutations = {
  showHeader(state, showHeader){
    state.showHeader = showHeader;
  },
  setHistorico(state, historico){
    state.listaHistorico = historico;
  },
  setSenhaAtual(state, senhaAtual){
    state.senhaAtual = senhaAtual;
  },
  setGuiche(state, guiche){console.log('chamou 2');
    state.guiche = guiche;
  },
  showConfiguracao(state, showConfiguracao){
    
    state.showConfiguracao = showConfiguracao;
  }
}
