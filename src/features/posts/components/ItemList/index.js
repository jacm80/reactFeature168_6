/* eslint-disable no-nested-ternary */
import React, { memo } from 'react';
import { View, Text } from 'react-native';

const getStyles = isHeader => ({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row'
  },
  contentText: {
    flex: 1,
    fontWeight: isHeader ? 'bold' : 'normal',
  },
  contentDescription: {
    flex: 4,
    fontWeight: isHeader ? 'bold' : 'normal',
  }
});

const ItemList = ({
  id, title, completed, isHeader = false
}) => {
  const styles = getStyles(isHeader);
  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>{ id }</Text>
      <Text style={styles.contentDescription}>{ title }</Text>
      {/* UGLY no hacer!!! */}
      <Text style={styles.contentText}>{ completed === 'Done' ? completed : completed ? 'Yes' : 'No' }</Text>
    </View>
  );
};

export default memo(ItemList);
