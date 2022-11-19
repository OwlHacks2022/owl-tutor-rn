/**
 * Good Afternoon, User, this is on your schedule
 * TODO list
 *  Canvas Calender API
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.hero}>
				<Text style={styles.greetings}>Greetings, Oliver</Text>
			</View>
			<View style={styles.calenderContainer}>
				<Text>Here are some events that's happening</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	greetings: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	hero: {
		padding: 20,
		width: '100%',
	},
	calenderContainer: {
		padding: 20,
		width: '100%',
	},
});
