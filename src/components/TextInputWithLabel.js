import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputWithLabel = ({ label, value, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    marginLeft: 10,
    marginBottom: 10
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 50
  },
});

export default TextInputWithLabel;