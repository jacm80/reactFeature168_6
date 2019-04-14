import _ from 'lodash';
import React, { memo } from 'react';
import { View } from 'react-native';

import FormAgenda from '../components/FormAgenda';
import AgendaList from '../components/AgendaList';

// hooks import
import useContacto from '../hooks/useContacto';
import useAgenda from '../hooks/useAgenda';

const styles = {
  mainContainer: { flex: 1 },
  listContainer: { flex: 1 }
};

const Agenda = ({ navigation }) => {
  const [contacto, setContacto] = useContacto({ nombre: 'Juan', direccion: 'Vergara 583' });
  const [agenda, setAgenda] = useAgenda({ });

  const handlerSave = () => {
    const payloadContacto = { ...contacto, id: new Date().getTime() };
    setAgenda(payloadContacto);
  };

  const handlerGoBack = () => navigation.navigate('Home');

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
        <FormAgenda
          nombre={contacto.nombre}
          direccion={contacto.direccion}
          handlerChange={setContacto}
          onClickSave={handlerSave}
          onClickBack={handlerGoBack}
        />
        <View style={styles.listContainer}>
          { (_.values(agenda).length > 0) && <AgendaList list={_.values(agenda)} /> }
        </View>
      </View>
    </View>
  );
};

export default memo(Agenda);
