import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForumTab from '../tabs/ForumTab';
import { COLORS } from '../constants';
import AppointmentTab from '../tabs/AppointmentTab';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const TAB_ICON = {
    Home: 'home',
    ForumTab: 'chatbubble-ellipses',
    AppointmentTab: 'calendar',
    Profile: 'person',
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          iconName = TAB_ICON[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
        ),
        headerTintColor: COLORS.white,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Owl Tutor',
        }}
      />
      <Tab.Screen
        name="ForumTab"
        component={ForumTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AppointmentTab"
        component={AppointmentTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
