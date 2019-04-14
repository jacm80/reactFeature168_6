import _ from 'lodash';
import React, {
  useRef, useEffect, useReducer, useState, useMemo, useCallback, memo
} from 'react';
import { useDebounce } from 'use-debounce';
import { View } from 'react-native';

import generateData from '../mocks/GET';
import contactosReducers, {
  setContacto,
  setPatternSearchContactos
} from '../ducks/contactos.duck';

import { CustomButton } from '../../commons/components';

import SearchInput from '../components/SearchInput';
import ContactoList from '../components/ContactoList';

const Contactos = ({ navigation }) => {
  const searchInputRef = useRef(null);
  const [contactos, dispatch] = useReducer(contactosReducers.contactos, []);
  const [contactosSearchText, dispatchSearch] = useReducer(contactosReducers.contactosSearchText, '');

  const setPatternSearchContactosAction = payload => dispatchSearch(setPatternSearchContactos(payload));
  const setContactoAction = payload => dispatch(setContacto(payload));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setContactoAction(_.mapKeys(generateData(10), 'id'));
      setLoaded(true);
    }
  }, [contactos, loaded]);

  useEffect(() => {
    searchInputRef.current.focus();
  });

  const contactosAry = useMemo(() => _.map(contactos, values => values), [contactos]);

  const contactosWithSearch = useMemo(() => {
    if (contactosSearchText !== null && contactosSearchText === '') return contactosAry;
    return contactosAry.filter((item) => {
      const lowerFilter = contactosSearchText.toLowerCase();
      return (
        item.fullname.toLowerCase().includes(lowerFilter)
        || item.phone.toLowerCase().includes(lowerFilter)
        || item.address.toLowerCase().includes(lowerFilter)
      );
    });
  }, [contactosSearchText, contactosAry]);

  const [debounceSearch] = useDebounce(contactosWithSearch, 100);

  return (
    <View style={{ flex: 1 }}>
      <SearchInput
        searchInputRef={searchInputRef}
        value={contactosSearchText}
        handleChangeFilter={setPatternSearchContactosAction}
      />
      <View style={{ flex: 6 }}>
        <ContactoList contactos={debounceSearch} />
      </View>
      <View style={{ flex: 1 }}>
        <CustomButton
          label="Regresar"
          onPressButtonCustom={useCallback(() => { navigation.navigate('Home'); }, [navigation])}
        />
      </View>
    </View>
  );
};

export default memo(Contactos);
