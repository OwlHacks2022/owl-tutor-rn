import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { COLORS } from '../../constants';

export default function DropInAppointmentScreen() {
  return (
    <View style={styles.container}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>Drop-In Appointment (Zoom)</ListItem.Title>
        </ListItem.Content>
        <Button
          title="Open"
          type="outline"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.primary,
  },
});
