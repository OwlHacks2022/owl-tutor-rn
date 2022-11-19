import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	FlatList,
} from 'react-native';
import { COLORS } from '../../constants';

const { width } = Dimensions.get('window');

const comments = [];

export default function ForumPostScreen() {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'How to solve this problem?', // TODO: change this to the course > post title
		});
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<View style={styles.topInfoContainer}>
					<View style={styles.personInfo}>
						<Image
							source={require('../../assets/images/profile_placeholder.png')}
							style={styles.avatar}
						/>
						<Text>Oliver</Text>
					</View>
					<Text style={styles.dateTime}>11/19/2022</Text>
				</View>
				<Text style={styles.title}>How to solve this problem?</Text>
				<Text style={styles.content}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
					quibusdam earum soluta expedita ullam accusamus nemo culpa, voluptates
					cumque ducimus illum placeat sit temporibus suscipit rerum esse animi
					tenetur consequatur non excepturi ad. Nam quasi suscipit placeat aut
					assumenda magni. Ad praesentium dolor perferendis molestias aperiam,
					quis accusamus esse cupiditate!
				</Text>
			</View>
			<View style={styles.commentsContainer}>
				<FlatList
					data={comments}
					renderItem={({ item }) => <CommentCard />}
					ListEmptyComponent={
						<View>
							<Text>No comments yet</Text>
						</View>
					}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width,
		alignItems: 'center',
		paddingVertical: 20,
		backgroundColor: COLORS.grey,
	},
	topInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	contentContainer: {
		backgroundColor: COLORS.white,
		padding: 10,
		width,
		marginBottom: 20,
	},
	commentsContainer: {
		backgroundColor: COLORS.white,
		width,
		flex: 1,
	},
	avatar: {
		width: 25,
		height: 25,
		borderRadius: 25,
		borderColor: COLORS.primary,
		borderWidth: 1,
		marginRight: 10,
	},
	personInfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	dateTime: {
		color: COLORS['grey-darken'],
	},
	title: {
		marginTop: 5,
		fontSize: 20,
		fontWeight: 'bold',
	},
});
