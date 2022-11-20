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

const { width } = Dimensions.get('window');

export default function CourseCard({ name }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Course', {
          name,
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.courseTitle}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width,
    paddingVertical: 10,
    borderColor: COLORS.grey,
    borderBottomWidth: 2,
  },
  courseImagePlaceHolder: {
    width,
    height: 100,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  courseTitle: {
    fontSize: 20,
  },
  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
