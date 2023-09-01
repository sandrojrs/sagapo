
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'blue', // or any color you prefer
    borderColor: 'blue',
  },
});

export default Checkbox;