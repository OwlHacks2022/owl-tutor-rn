import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import PostCard from '../../components/Forum/Course/PostCard';
import { COLORS } from '../../constants';

export default function CourseScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.name,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
        renderItem={({ item }) => <PostCard />}
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
