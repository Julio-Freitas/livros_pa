import * as types from '../actions/actionTypes';

export const getLendo = value => ({
  type: types.SET_LENDO,
  lendo: value
});

export const getQueroLer = value => ({
  type: types.SET_QUERO_LER,
  queroLer: value
});

export const getConcluido = value => ({
  type: types.SET_CONCLUIDO,
  concluido: value
});
