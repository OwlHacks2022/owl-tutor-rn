import React, { useLayoutEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManageAppointmentsScreen from '../screens/Appointment/ManageAppointmentsScreen';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import CreateAppointmentScreen from '../screens/Appointment/CreateAppointmentScreen';
import DropInAppointmentScreen from '../screens/Appointment/DropInAppointmentScreen';

const Tab = createMaterialTopTabNavigator();

export default function AppointmentTab() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Appointments',
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tab.Screen name="Manage" component={ManageAppointmentsScreen} />
      <Tab.Screen name="New" component={CreateAppointmentScreen} />
      <Tab.Screen name="Drop-In" component={DropInAppointmentScreen} />
    </Tab.Navigator>
  );
}
