import React, { memo } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import * as styles from '../../../commons/styles';
import { CustomButton } from '../../../commons/components';

const FormAgenda = ({
  nombre,
  direccion,
  handlerChange,
  onClickSave,
  onClickBack
}) => (
  <View style={styles.container}>
    <View style={styles.containerInputs}>
      <TextInput
        style={styles.input}
        name="nombre"
        placeholder="nombre"
        value={nombre}
        onChangeText={text => handlerChange({ ...{ nombre, direccion }, nombre: text })}
      />
      <TextInput
        style={styles.input}
        name="direccion"
        placeholder="direccion"
        value={direccion}
        onChangeText={text => handlerChange({ ...{ nombre, direccion }, direccion: text })}
      />
    </View>
    <View style={{ ...styles.containerButton, flexDirection: 'row' }}>
      <CustomButton onPressButtonCustom={onClickSave} />
      <CustomButton label="Regresar" onPressButtonCustom={onClickBack} customBackground="red" />
    </View>
  </View>
);

FormAgenda.propTypes = {
  nombre: PropTypes.string,
  direccion: PropTypes.string,
  onClickBack: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired
};

FormAgenda.defaultProps = {
  nombre: '',
  direccion: ''
};

export default memo(FormAgenda);
