import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForumScreen from '../screens/Forum/ForumScreen';
import CourseScreen from '../screens/Forum/CourseScreen';
import { COLORS } from '../constants';

const ForumTabStack = createNativeStackNavigator();

export default function ForumTab() {
	return (
		<ForumTabStack.Navigator
			screenOptions={({ route }) => ({
				headerBackground: () => (
					<View style={{ flex: 1, backgroundColor: COLORS.primary }} />
				),
				headerTintColor: COLORS.white,
			})}
		>
			<ForumTabStack.Screen name="Forum" component={ForumScreen} />
			<ForumTabStack.Screen name="Course" component={CourseScreen} />
		</ForumTabStack.Navigator>
	);
}
