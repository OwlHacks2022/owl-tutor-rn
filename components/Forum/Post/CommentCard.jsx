import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../constants';

export default function CommentCard({
  name,
  upvotes,
  avatar,
  datetime,
  comment,
  isTutor,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.section}>
          <Image
            source={require('../../../assets/images/profile_placeholder.png')}
            style={styles.avatar}
          />
          <Text>{name}</Text>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color={isTutor ? COLORS.green : COLORS.white}
            style={{ marginLeft: 10 }}
          />
        </View>
        <View style={styles.section}>
          <Ionicons
            name="heart"
            size={20}
            color={upvotes === 0 ? COLORS['grey-darken'] : COLORS.primary}
            style={{ marginRight: 5 }}
          />

          <Text>{upvotes}</Text>
        </View>
        <View style={styles.section}>
          <Text>{datetime}</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainContent}>{comment}</Text>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="heart"
              size={20}
              //  color={COLORS.primary}
              color={COLORS.primary}
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: COLORS.grey,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {},
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    resizeMode: 'cover',
    borderColor: COLORS.primary,
    marginRight: 10,
  },
  mainContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
  },
});
