import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('window');

export default function CourseCard() {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Course');
			}}
		>
			<View style={styles.container}>
				<View style={styles.courseImagePlaceHolder} />
				<Text style={styles.courseTitle}>Math 1A</Text>
				{/*TODO: change to course name*/}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		width,
		marginVertical: 10,
	},
	courseImagePlaceHolder: {
		width,
		height: 100,
		backgroundColor: COLORS['yellow-tint'],
	},
	courseTitle: {
		fontSize: 20,
	},
});
