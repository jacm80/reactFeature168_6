import React, { memo } from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const CustomHeader = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ title }</Text>
  </View>
);

export default memo(CustomHeader);
