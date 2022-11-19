import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../constants';
import AppointmentScreen from '../screens/Appointment/AppointmentScreen';
import ManageAppointmentsScreen from '../screens/Appointment/ManageAppointmentsScreen';

const AppointmentTabStack = createNativeStackNavigator();

export default function AppointmentTab() {
  return (
    <AppointmentTabStack.Navigator
      screenOptions={({ route }) => ({
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
        ),
        headerTintColor: COLORS.white,
      })}
    >
      <AppointmentTabStack.Screen
        name="AppointmentCenter"
        component={AppointmentScreen}
      />
      <AppointmentTabStack.Screen
        name="ManageAppointments"
        component={ManageAppointmentsScreen}
      />
    </AppointmentTabStack.Navigator>
  );
}
