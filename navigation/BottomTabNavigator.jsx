import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForumTab from '../tabs/ForumTab';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					iconName = focused
						? 'ios-information-circle'
						: 'ios-information-circle-outline';
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Forum" component={ForumTab} />
			<Tab.Screen name="Appointment" component={AppointmentScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
}
