import {actions} from './actions';
import {getters} from "./getters";
import {mutations} from './mutattions';

const namespaced = true;

const state = {
  dadosUsuario: null,
  autenticado: false,
  showHeader: false,
  listaHistorico: [],
  senhaAtual: null,
  guiche: null,
  showConfiguracao: false
}

export const principal = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
