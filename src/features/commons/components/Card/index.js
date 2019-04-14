import React, { memo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderShadow: '#e3e3e3',
    borderRadius: 10,
    shadowColor: '#e3e3e3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 10,
    margin: 5,
    backgroundColor: 'white'
  }
};

const Card = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

Card.propTypes = {
  children: PropTypes.any.isRequired
};

export default memo(Card);
