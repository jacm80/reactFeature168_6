import React, { memo } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Image
} from 'react-native';
const reactSpace = require('../../../assets/images/reactSpace.png');

const styles = {
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#e3e3e3'
  },
  itemButton: {
    flex: 1,
    padding: 10
  },
  titleContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const Home = ({ navigation }) => {
  const options = [
    { id: '1', title: 'useState, useReducer', path: 'Agenda' },
    { id: '2', title: 'useEffect HTTP Request', path: 'PostsList' },
    { id: '3', title: 'useRef', path: 'Post' },
    { id: '4', title: 'useMemo', path: 'NumeroDoble' },
    { id: '5', title: 'useCallback', path: 'ExCallback' },
    { id: '6', title: 'useContext', path: 'ExContent' },
    { id: '7', title: 'Integrando todo de hooks', path: 'Contactos' },
    { id: '8', title: 'Cart: Hooks y ReactContext', path: 'Cart' }
  ];


  const handleNavigate = path => () => navigation.navigate(path);
  const customkeyExtractor = item => item.id.toString();

  const renderList = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={handleNavigate(item.path)} style={styles.itemButton}>
        <Text>{item.title} Modulo: <Text style={{ fontWeight: 'bold' }}>{item.path}</Text></Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={reactSpace} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Ejemplo de como usar React-Hooks</Text>
      </View>
      <FlatList
        renderItem={renderList}
        data={options}
        keyExtractor={customkeyExtractor}
      />
    </View>
  );
};

export default memo(Home);
