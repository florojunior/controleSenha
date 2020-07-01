import to from 'await-to-js';
import http from 'axios';

export const actions = {

  atualizarDadosUsuario(state, dadosUsuario) {
    state.commit('setDadosUsuario', dadosUsuario);
  },
  setAutenticacao(state){
    state.commit('setAutenticacao', true);
  },
  setCloseHeader(state){
    state.commit('showHeader', false);
  },
  setHistorico(state, historico){
    state.commit('setHistorico', historico);
  },
  setSenhaAtual(state, senhaAtual){
    state.commit('setSenhaAtual', senhaAtual);
  },
  setGuiche(state, guiche){
    localStorage.setItem('guiche', guiche);
    state.commit('setGuiche', guiche);
  },
  setShowConfiguracao(state, showConfiguracao){
    state.commit('showConfiguracao', showConfiguracao);
  }
}
