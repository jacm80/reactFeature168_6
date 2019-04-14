import React, { memo } from 'react';
import { Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { Card } from '../../../commons/components';
import { input as inputStyle } from '../../../commons/styles';

const SearchInput = ({
  placeholder, value, label, handleChangeFilter, searchInputRef
}) => (
  <Card>
    <Text style={{ flex: 1 }}>{ label }</Text>
    <TextInput
      ref={searchInputRef}
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChangeText={handleChangeFilter}
    />
  </Card>
);

SearchInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: 'texto a buscar...',
  label: 'Buscar'
};

export default memo(SearchInput);
