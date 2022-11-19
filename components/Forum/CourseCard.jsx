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
        <View style={styles.wrapper}>
          <View style={styles.topInfo}>
            <Text style={styles.courseTitle}>Math 1A</Text>
            <Text style={styles.info}>301234</Text>
            <Text style={styles.info}>Professor Marnie</Text>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, laboriosam!
          </Text>
        </View>
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
  wrapper: {
    paddingHorizontal: 10,
  },
  courseTitle: {
    fontSize: 20,
  },
  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    color: COLORS['grey-darken'],
  },
});
