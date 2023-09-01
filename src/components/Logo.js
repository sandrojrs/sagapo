import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginTop: 20,
    marginBottom: 20
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 4 / 1,
  },
});

export default Logo;