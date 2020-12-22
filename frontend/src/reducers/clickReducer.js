import * as types from '../actions/actionTypes';
const initialState = {
  lendo: [],
  queroLer: [],
  concluido: [],
  todosLivros: []
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LENDO:
      return {
        ...state,
        lendo: action.lendo
      };
    case types.SET_QUERO_LER:
      return {
        ...state,
        queroLer: action.queroLer
      };
    case types.SET_CONCLUIDO:
      return {
        ...state,
        concluido: action.concluido
      };
    case types.SET_ALL_LIVROS:
      return {
        ...state,
        todosLivros: action.todosLivros
      };
    default:
      return state;
  }
};
