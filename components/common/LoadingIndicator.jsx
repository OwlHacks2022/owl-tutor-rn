import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');

export default function LoadingIndicator({ text }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.white} />
      {text ? <Text style={styles.text}>{text}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    position: 'absolute',
    width,
    height,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
