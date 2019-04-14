import React, { memo } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { CustomButton } from '../../../commons/components';

const postStyles = {
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    margin: 10,
    borderRadius: 10
  }
};

const FormPost = ({
  title,
  description,
  titleFormRef,
  setTitle,
  setDescription,
  handleRefEvent,
  handleBack
}) => (
  <View>
    <TextInput
      name="title"
      ref={titleFormRef}
      style={postStyles.input}
      placeholder="title"
      value={title}
      onChangeText={text => setTitle(text)}
    />
    <TextInput
      name="descripcion"
      style={postStyles.input}
      placeholder="description"
      value={description}
      onChangeText={text => setDescription(text)}
    />
    <CustomButton
      onPressButtonCustom={handleRefEvent}
      label="Focus a Title"
    />
    <CustomButton
      onPressButtonCustom={handleBack}
      label="Regresar a Home"
      customBackground="red"
    />
  </View>
);

FormPost.propTypes = {
  titleFormRef: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  handleRefEvent: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
};

FormPost.defaultProps = {
  title: '',
  description: ''
};


export default memo(FormPost);
