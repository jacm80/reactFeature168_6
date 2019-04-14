import React, { useContext, useCallback } from 'react';
import { View, Text } from 'react-native';

import { NumberContext } from '../../../App';
import { CustomButton } from '../../commons/components';

const styles = {
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerValue: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textValue: {
    padding: 10,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold'
  }
};

const ExContent = ({ navigation }) => (
  <>
    <View style={styles.title}>
      <Text>Ejemplo usando React Context</Text>
    </View>
    <DisplayContextWithHook />
    <View style={{ flex: 3 }}>
      <CustomButton label="Regressar a Home" onPressButtonCustom={useCallback(() => { navigation.navigate('Home'); })} />
    </View>
  </>
);

// Utilizando el Api tradicional para Context

// eslint-disable-next-line no-unused-vars
const DisplayContext = () => (
  <NumberContext.Consumer>
    {value => (
      <View style={styles.containerValue}>
        <Text style={styles.textValue}>
          {`Value: ${value}`}
        </Text>
      </View>
    )}
  </NumberContext.Consumer>
);

// Utilizando el Api de hooks

const DisplayContextWithHook = () => {
  const value = useContext(NumberContext);
  return (
    <View style={styles.containerValue}>
      <Text style={styles.textValue}>
        {`Value: ${value}`}
      </Text>
    </View>
  );
};

export default ExContent;
