import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { COLORS } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const PROFILE_PLACEHOLDER = require('../assets/images/profile_placeholder.png');

const UPVOTES = 0; // TODO: change this to read from db

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PROFILE_PLACEHOLDER} style={styles.avatar} />
      </View>
      <View style={styles.bannerArea}>
        <Ionicons
          name="heart"
          size={30}
          color={COLORS.grey}
          style={{
            marginRight: 5,
          }}
        />
        {UPVOTES === 0 ? (
          <Text style={styles.bannerText}>No upvotes yet</Text>
        ) : (
          <Text style={styles.bannerText}>{UPVOTES} upvotes</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.singleLine}>
          <Text style={styles.label}>User Name</Text>
          <Text style={styles.infoText}>Oliver</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.label}>CWID</Text>
          <Text style={styles.infoText}>20123456</Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.label}>Major</Text>
          <Text style={styles.infoText}>Computer Science</Text>
        </View>
      </View>
      <Button title="Sign Out" buttonStyle={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  bannerArea: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  bannerText: {
    color: COLORS.white,
    fontSize: 20,
  },
  infoContainer: {
    width: width - 40,
    paddingVertical: 10,
  },
  singleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
  },
});
