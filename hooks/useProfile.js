import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import canvasApi from '../api/canvas-api';

export default function useProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');
        console.log('user id: ', userId);
        const res = await canvasApi.get(
          `/users/${userId}/profile?access_token=${token}`
        );
        setProfile(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return profile;
}
