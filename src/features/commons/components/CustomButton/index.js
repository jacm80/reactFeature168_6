import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { boxAcceptButton, acceptButton } from '../../styles';

const CustomButton = ({ label, onPressButtonCustom, customBackground, disabled }) => {
  const computedBackground = () => ((disabled === true) ? '#e3e3e3' : customBackground);

  const handlerOnPress = () => {
    if (!disabled) onPressButtonCustom();
  };

  return (
    <TouchableOpacity style={{ ...boxAcceptButton, backgroundColor: computedBackground() }} onPress={handlerOnPress}>
      <Text style={acceptButton}>{ label }</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onPressButtonCustom: PropTypes.func.isRequired,
  customBackground: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

CustomButton.defaultProps = {
  disabled: false,
  label: 'Aceptar',
  customBackground: 'blue'
};

export default memo(CustomButton);
