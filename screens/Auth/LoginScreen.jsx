import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import { COLORS } from '../../constants';
import canvasAPI from '../../api/canvas-api';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [verifying, setVerifying] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.prompt(
      'Put your Canvas access token here',
      'You can get it from \n https://foothillcollege.instructure.com/profile/settings',
      async token => {
        if (!token.length) {
          Alert.alert('You must enter a token.');
          return;
        }
        try {
          setVerifying(true);
          const res = await canvasAPI.get(`/courses?access_token=${token}`);
          if (res.status === 200) {
            const userId = res.data[0]?.enrollments[0]?.user_id;
            const accountId = res.data[0]?.account_id;

            if (!userId || !accountId) {
              Alert.alert('Login Failed!');
              return;
            }
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('userId', userId.toString());
            await AsyncStorage.setItem('accountId', accountId.toString());
            navigation.navigate('Root');
          }
        } catch (error) {
          console.error(error);
        } finally {
          setVerifying(false);
        }
      }
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/owl-tutor.png')}
          style={styles.logo}
        />
        <Button
          title="Sign in with Canvas"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={handleLogin}
        />
      </View>
      {verifying ? <LoadingIndicator text="verifying" /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  buttonTitle: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
