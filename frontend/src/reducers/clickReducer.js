import * as types from '../actions/actionTypes';
const initialState = {
  lendo: [],
  queroLer: [],
  concluido: []
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
    default:
      return state;
  }
};
