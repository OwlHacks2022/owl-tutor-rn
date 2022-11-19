import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { COLORS } from '../constants';

const { width, height } = Dimensions.get('window');

const PROFILE_PLACEHOLDER = require('../assets/images/profile_placeholder.png');

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Image source={PROFILE_PLACEHOLDER} style={styles.avatar} />
				<Text>Oliver</Text>
				<Text>20123456</Text>
				<Text>Computer Science</Text>
			</View>
			<Button title="Sign Out" buttonStyle={styles.button} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 20,
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 75,
		resizeMode: 'cover',
		borderWidth: 3,
		borderColor: COLORS.primary,
	},
	button: {
		backgroundColor: COLORS.primary,
		width: width - 40,
	},
});
