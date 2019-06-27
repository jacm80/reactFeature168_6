import React, { memo } from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerMain: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
    borderColor: 'gray'
  },
  containerHeader: {
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    padding: 5
  },
  containerRow: {
    flexDirection: 'row',
    padding: 5
  },
  containerBody: { },
  textRow: { flex: 1 }
};

export const AgendaList = ({ list }) => (
  <View style={styles.containerMain}>
    <View style={styles.containerHeader}>
      <Text style={styles.textRow}>ID</Text>
      <Text style={styles.textRow}>Nombre</Text>
      <Text style={styles.textRow}>Direccion</Text>
    </View>
    <View style={styles.containerBody}>
      {list.map(c => (
        <View key={c.id} style={styles.containerRow}>
          <Text style={styles.textRow}>{c.id}</Text>
          <Text style={styles.textRow}>{c.nombre}</Text>
          <Text style={styles.textRow}>{c.direccion}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default memo(AgendaList);
