import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CreateAppointmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
