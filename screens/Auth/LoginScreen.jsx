import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { COLORS } from '../../constants';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/owl-tutor.png')}
        style={styles.logo}
      />
      <Button
        title="Sign in with Canvas"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  buttonTitle: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
