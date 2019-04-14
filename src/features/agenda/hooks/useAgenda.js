import { useReducer } from 'react';

import agendaReducer, { SET_CONTACTO } from '../duck/agenda.duck';

const useAgenda = (initialState) => {
  const [agenda, dispatch] = useReducer(agendaReducer, initialState);
  const setAgenda = (payload) => {
    dispatch({ type: SET_CONTACTO, payload });
  };
  return [agenda, setAgenda];
};

export default useAgenda;
