import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
} from 'react-native';
import { COLORS } from '../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function PostCard() {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('ForumPost');
			}}
		>
			<View style={styles.container}>
				<View style={styles.left}>
					<Image
						source={require('../../../assets/images/profile_placeholder.png')}
						style={styles.avatar}
					/>
				</View>
				<View style={styles.middle}>
					<Text style={styles.title}>How to solve this problem?</Text>
					<Text style={styles.excerpt}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						similique aliquam inventore consectetur deleniti dolorum quo rerum
						minus a. Dolor.
					</Text>
				</View>
				<View style={styles.right}>
					<Ionicons name="checkmark-circle" size={30} color={COLORS.grey} />
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width,
		backgroundColor: COLORS.white,
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	excerpt: {},
	left: {
		width: 50,
		marginRight: 10,
	},
	middle: {
		width: width - 120,
	},
	right: {
		width: 50,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderColor: COLORS.primary,
		borderWidth: 2,
	},
});
