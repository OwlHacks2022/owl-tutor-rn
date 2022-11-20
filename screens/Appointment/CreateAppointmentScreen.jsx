import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import useAppointments from '../../hooks/useAppointments';
import DatePicker from 'react-native-datepicker';
import { COLORS } from '../../constants';

export default function CreateAppointmentScreen() {
  const [subject, setSubject] = useState('');
  const [tutor, setTutor] = useState('');
  const [date, setDate] = useState('');

  const { addAppointment } = useAppointments();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
      <Input placeholder="Subject" />
      <Input placeholder="Tutor" value={tutor} onChangeText={setTutor} />
      <View style={styles.datePicker}>
        <DatePicker
          style={{ width: 200 }}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={setDate}
          value={date}
        />
      </View>
      <Button
        title="Book"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
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
  datePicker: {
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor: COLORS.primary,
  },
  buttonTitle: {
    color: COLORS.white,
  },
});
