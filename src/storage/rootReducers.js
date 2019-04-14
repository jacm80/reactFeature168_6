import { combineReducers } from 'redux';

import agendaReducer from '../features/agenda/duck/agenda.duck';
import contactosReducer from '../features/mixed-all/ducks/contactos.duck';

const rootReducers = combineReducers({
  ...agendaReducer,
  ...contactosReducer
});

export default rootReducers;
