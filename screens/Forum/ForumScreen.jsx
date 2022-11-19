/**
 * Classes (from CANVAS API) - dashboard
 * Search Bar
 */

import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	FlatList,
} from 'react-native';
import CourseCard from '../../components/Forum/CourseCard';
import { COLORS } from '../../constants';

export default function ForumScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				data={[{ key: 'a' }, { key: 'b' }]}
				renderItem={({ item }) => <CourseCard />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 20,
		backgroundColor: COLORS.grey,
	},
});
