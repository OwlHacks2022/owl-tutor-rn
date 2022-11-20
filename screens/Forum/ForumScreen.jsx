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
import useCourses from '../../hooks/useCourses';

export default function ForumScreen() {
  const courses = useCourses();

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard {...item} />}
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
