import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AgendaScreen from '../features/agenda/containers/Agenda';
import PostsListScreen from '../features/posts/containers/PostsList';
import PostScreen from '../features/posts/containers/Post';
import NumeroDobleScreen from '../features/memoized/containers/NumeroDoble';
import ExCallbackScreen from '../features/memoized/containers/ExCallback';
import HomeScreen from '../features/home/containers/Home';
import ExContentScreen from '../features/context/containers/ExContext';
import ContactosScreen from '../features/mixed-all/containers/Contactos';
import CartScreen from '../features/context/cart/containers/Cart';

const styles = {
  headerBar: {
    height: 40,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  }
};

const header = () => (
  <View style={styles.headerBar}>
    <Text>Prueba</Text>
  </View>
);

const AppNavigator = createStackNavigator({
  Home: {
    navigationOptions: {
      header: header()
    },
    screen: HomeScreen
  },
  Cart: {
    navigationOptions: {
      header: header()
    },
    screen: CartScreen
  },
  Contactos: {
    navigationOptions: {
      header: header()
    },
    screen: ContactosScreen
  },
  ExContent: {
    navigationOptions: {
      header: header()
    },
    screen: ExContentScreen
  },
  ExCallback: {
    navigationOptions: {
      header: header()
    },
    screen: ExCallbackScreen
  },
  NumeroDoble: {
    navigationOptions: {
      header: header()
    },
    screen: NumeroDobleScreen
  },
  Post: {
    navigationOptions: {
      header: header()
    },
    screen: PostScreen
  },
  Agenda: {
    navigationOptions: {
      header: header()
    },
    screen: AgendaScreen
  },
  PostsList: {
    navigationOptions: {
      header: header()
    },
    screen: PostsListScreen
  }
});

export default createAppContainer(AppNavigator);
