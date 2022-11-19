import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForumScreen from '../screens/ForumScreen';

const ForumTabStack = createNativeStackNavigator();

export default function ForumTab() {
	return (
		<ForumTabStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<ForumTabStack.Screen name="Forum" component={ForumScreen} />
		</ForumTabStack.Navigator>
	);
}
