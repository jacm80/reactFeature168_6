const NAMESPACE = 'RNFEATURES16_8/MIXED_ALL';

const SET_CONTACTOS = `${NAMESPACE}/SET_CONTACTOS`;
const SET_PATTERN_SEARCH_CONTACTOS = `${NAMESPACE}/SET_PATTERN_SEARCH_CONTACTOS`;

const contactosReducers = (state = [], action) => {
  switch (action.type) {
    case SET_CONTACTOS:
      return action.payload;
    default:
      return state;
  }
};

const contactosSearchTextReducers = (state = null, action) => {
  switch (action.type) {
    case SET_PATTERN_SEARCH_CONTACTOS:
      return action.payload;
    default:
      return state;
  }
};

export const setContacto = payload => ({
  type: SET_CONTACTOS,
  payload
});

export const setPatternSearchContactos = payload => ({
  type: SET_PATTERN_SEARCH_CONTACTOS,
  payload
});


export default {
  contactos: contactosReducers,
  contactosSearchText: contactosSearchTextReducers
};
