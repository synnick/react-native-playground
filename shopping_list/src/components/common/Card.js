import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderColor: '#ddd',
    borderBottomWidth: 0,
    borderRadius: 2,
    borderWidth: 1,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
};

const Card = ({ children }) => {
  return (
    <View style={styles.containerStyle}>{ children }</View>
  );
};

export { Card };
