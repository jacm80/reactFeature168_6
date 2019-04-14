import React, { useCallback, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import * as styles from '../../commons/styles';
import customStyles from './styles';
import { CustomButton } from '../../commons/components';

const ExCallback = ({ navigation }) => {
  const [result, setResult] = useState(0);
  const [numero, setNumero] = useState(0);

  const handleBack = () => navigation.navigate('Home');

  const computedFactorial = useCallback((n) => {
    if (n === 0) return 1;
    return n * computedFactorial(n - 1);
  }, []);

  return (
    <View style={customStyles.flexOne}>
      <View style={customStyles.flexOne}>
        <Text style={customStyles.factorialTitle}>Usar hook - useCallback</Text>
        <TextInput
          placeholder="factorial del numero?"
          onChangeText={setNumero}
          value={numero.toString()}
          style={styles.input}
        />
        <View style={customStyles.resultTextContainer}>
          <Text>{ result }</Text>
        </View>
      </View>
      <View style={customStyles.flexTree}>
        <CustomButton
          onPressButtonCustom={useCallback(
            () => {
              // eslint-disable-next-line no-console
              console.time('memoized');
              setResult(computedFactorial(numero));
              // eslint-disable-next-line no-console
              console.timeEnd('memoized');
            }, [computedFactorial, numero]
          )}
          label="Factorial (Memoizad con useCallback)"
          customBackground="red"
        />
        <CustomButton
          onPressButtonCustom={handleBack}
          label="Regresar a Home"
        />
      </View>
    </View>
  );
};

export default ExCallback;
