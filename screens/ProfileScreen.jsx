import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useProfile from '../hooks/useProfile';

const { width, height } = Dimensions.get('window');

const PROFILE_PLACEHOLDER = require('../assets/images/profile_placeholder.png');

const UPVOTES = 0; // TODO: change this to read from db

export default function ProfileScreen() {
  const navigation = useNavigation();
  const profile = useProfile();

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('accountId');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View>
        {profile?.avatar_url ? (
          <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
        ) : (
          //<Image source={PROFILE_PLACEHOLDER} style={styles.avatar} />
          <Image source={PROFILE_PLACEHOLDER} style={styles.avatar} />
        )}
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
          <Text style={styles.infoText}>
            {profile?.name ? profile.name : '-'}
          </Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.label}>CWID</Text>
          <Text style={styles.infoText}>
            {profile?.login_id ? profile.login_id : '-'}
          </Text>
        </View>
        <View style={styles.singleLine}>
          <Text style={styles.label}>Major</Text>
          <Text style={styles.infoText}>Computer Science</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleSignOut}>
        <View style={styles.signOutButton}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
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
    flex: 1,
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
  signOutButton: {
    backgroundColor: COLORS.primary,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  },
});
