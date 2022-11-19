/**
 * appointment history (manage: cancel, edit ...)
 * create appointment form
 * favorite tutors
 * Connect to Foothill's website?
 */
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BoxButton from '../components/Appointment/AppointmentCenter/BoxButton';

export default function AppointmentScreen() {
  const navigation = useNavigation();
  const BUTTONS = [
    {
      title: 'Create an Appointment',
      //  onPress: () => navigation.navigate('CreateAppointment'),
      onPress: () => {},
    },
    {
      title: 'Manage My Appointments',
      //  onPress: () => navigation.navigate('AppointmentHistory'),
      onPress: () => {},
    },
    {
      title: 'Drop-in Session (Zoom)',
      //  onPress: () => navigation.navigate('FavoriteTutors'),
      onPress: () => {},
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      // TODO change this to the course name
      headerTitle: 'Appointment Center',
    });
  }, []);
  return (
    <View style={styles.container}>
      {BUTTONS.map((button, index) => (
        <BoxButton key={index} title={button.title} onPress={button.onPress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
});
