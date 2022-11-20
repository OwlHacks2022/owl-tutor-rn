import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { COLORS } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DropInAppointmentScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="open" size={100} color={COLORS.primary} />
      <Text style={styles.title}>Drop-In Appointment (Zoom)</Text>
      <Button
        title="Open"
        type="outline"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
  },
  button: {
    borderColor: COLORS.primary,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: COLORS.primary,
  },
});
