export const SET_CONTACTO = 'RNFEATURENEWS/AGENDA/SET_CONTACTO';

const agendaReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CONTACTO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export const setContacto = payload => ({
  action: SET_CONTACTO,
  payload
});

export default agendaReducer;
