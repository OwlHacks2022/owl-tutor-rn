import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import useAppointments from '../../hooks/useAppointments';
import DatePicker from 'react-native-datepicker';
import { COLORS } from '../../constants';
import DropDownPicker from 'react-native-dropdown-picker';
import useCourses from '../../hooks/useCourses';

export default function CreateAppointmentScreen() {
  const [subject, setSubject] = useState('');
  const [tutor, setTutor] = useState('');
  const [date, setDate] = useState('11-20-2022');
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const { addAppointment } = useAppointments();

  const handleSubmit = async () => {
    console.log(subject, tutor, date);
    //if (!subject.length || !tutor.length || !date.length) {
    //  Alert.alert('Error', 'Please fill out all fields');
    //}
    try {
      await addAppointment(subject, tutor, date);
      setTutor('');
      setDate('');
      setSubject('');
      Alert.alert('Success', 'Appointment created successfully');
    } catch (error) {
      console.log(error);
    }
  };
  const tutors = [
    { label: 'John Doe', value: 'John Doe' },
    { label: 'Leo Kim', value: 'Leo Kim' },
    { label: 'Oliver Chou', value: 'Oliver Chou' },
    { label: 'Chris Kusmana', value: 'Chris Kusmana' },
  ];

  const courses = useCourses();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <DropDownPicker
            items={courses.map(course => ({
              label: course.name,
              value: course.name,
            }))}
            value={subject}
            setValue={setSubject}
            onPress={() => {
              setOpen(!open);
            }}
            open={open}
            placeholder="Select a subject"
          />
        </View>
        <View style={styles.wrapper}>
          <DropDownPicker
            items={tutors}
            value={tutor}
            setValue={setTutor}
            onPress={() => {
              setOpen2(!open2);
            }}
            open={open2}
            placeholder="Select a tutor"
          />
        </View>
        <View style={styles.datePicker}>
          <DatePicker
            style={{ width: 200 }}
            confirmBtnText="Confirm"
            format="MM-DD-YYYY"
            cancelBtnText="Cancel"
            onDateChange={setDate}
            date={date}
          />
        </View>
      </View>

      <Button
        title="Book"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={handleSubmit}
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
  wrapper: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
    backgroundColor: COLORS.primary,
  },
  buttonTitle: {
    color: COLORS.white,
  },
});
