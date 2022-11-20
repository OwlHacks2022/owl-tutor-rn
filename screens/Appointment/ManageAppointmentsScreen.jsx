/**
 * TODO: handle more appointments layout
 */
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { COLORS } from '../../constants';
import useAppointments from '../../hooks/useAppointments';

export default function ManageAppointmentsScreen() {
  const navigation = useNavigation();
  const { activeAppointments, pastAppointments } = useAppointments();

  const FAKE_APPOINTMENTS = [
    {
      subject: 'Math 1A',
      tutor: 'John Doe',
      date: 'Date: 01/01/2021 Time: 12:00 PM',
    },
    {
      subject: 'Math 1B',
      tutor: 'Tutor: Jane Doe',
      datetime: 'Date: 01/01/2021 Time: 12:00 PM',
    },
  ]; // TODO: read from db

  useLayoutEffect(() => {
    navigation.setOptions({
      // TODO change this to the course name
      headerTitle: 'My Appointments',
    });
  }, []);

  const handleCancel = () => {
    Alert.alert(
      'Cancel Appointment',
      'Are you sure you want to cancel this appointment?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {}, // TODO: connect to API
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Appointments</Text>
      {activeAppointments.length ? (
        activeAppointments.map((appointment, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{appointment.subject}</ListItem.Title>
              <ListItem.Subtitle>Tutor: {appointment.tutor}</ListItem.Subtitle>
              <ListItem.Subtitle>{appointment.date}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="Cancel"
              type="outline"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              onPress={handleCancel}
            />
          </ListItem>
        ))
      ) : (
        <Text style={styles.info}>No active appointments</Text>
      )}
      <Text style={styles.title}>Past Appointments</Text>
      {pastAppointments.length ? (
        pastAppointments.map((appointment, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{appointment.subject}</ListItem.Title>
              <ListItem.Subtitle>Tutor: {appointment.tutor}</ListItem.Subtitle>
              <ListItem.Subtitle>{appointment.date}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <Text style={styles.info}>No past appointments</Text>
      )}
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
  button: {
    borderColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.primary,
  },
  info: {
    textAlign: 'center',
    color: COLORS.gray,
  },
});
