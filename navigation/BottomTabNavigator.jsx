import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForumTab from '../tabs/ForumTab';
import { COLORS } from '../constants';

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
			<Tab.Screen name="Forum" component={ForumTab} />
			<Tab.Screen name="Appointment" component={AppointmentScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
}
