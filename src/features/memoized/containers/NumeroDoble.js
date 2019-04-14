import React, { useState, useMemo } from 'react';
import { View, Text, TextInput } from 'react-native';

import * as styles from '../../commons/styles';
import customStyles from './styles';
import { CustomButton } from '../../commons/components';


const NumeroDoble = ({ navigation }) => {
  const [numero, setNumero] = useState('0');
  // se memoriza el valor pasando la funcion y la lista de parametros que recibe
  const double = useMemo(() => numero * 2, [numero]);

  const handleBack = () => navigation.navigate('Home');

  return (
    <View style={customStyles.flexOne}>
      <View style={customStyles.flexOne}>
        <Text style={customStyles.factorialTitle}>Calcular el doble de un numero</Text>
        <TextInput
          onChangeText={setNumero}
          value={numero}
          style={styles.input}
        />
      </View>
      <View style={customStyles.resultContainer}>
        <Text style={customStyles.margin10}>Resultado</Text>
        <View style={customStyles.resultTextContainer}>
          <Text style={customStyles.textResult}>{double}</Text>
        </View>
      </View>
      <View style={customStyles.flexTree}>
        <CustomButton
          onPressButtonCustom={handleBack}
          label="Regresar a Home"
        />
      </View>
    </View>
  );
};

export default NumeroDoble;
