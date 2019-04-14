import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import { customKeyExtractor } from '../../../../helpers/customKeyExtractor';
import { Card } from '../../../commons/components';

const ContactoList = ({ contactos }) => {
  const renderList = ({ item }) => (
    <Card key={item.id}>
      <View>
        <Text> Nombre: <Text style={{ fontWeight: 'bold' }}> {item.fullname}</Text></Text>
        <Text> Celular: <Text style={{ fontWeight: 'bold' }}>{item.phone}</Text></Text>
        <Text> Direccion: <Text style={{ fontWeight: 'bold' }}>{item.address}</Text></Text>
      </View>
    </Card>
  );

  return (
    <View style={{ flex: 1 }}>
      { contactos.length > 0 && (
      <FlatList
        style={{ flex: 1 }}
        renderItem={renderList}
        data={contactos}
        keyExtractor={customKeyExtractor}
      />
      )}
    </View>
  );
};

ContactoList.propTypes = {
  contactos: PropTypes.array
};

ContactoList.defaultProps = {
  contactos: []
};

export default ContactoList;
