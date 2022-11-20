import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import canvasApi from '../api/canvas-api';
import { db } from '../firebase';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

export default function useProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');
        const res = await canvasApi.get(
          `/users/${userId}/profile?access_token=${token}`
        );
        setProfile(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const syncProfileOnFirebase = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');
        const res = await canvasApi.get(
          `/users/${userId}/profile?access_token=${token}`
        );
        const { name, short_name, sortable_name, avatar_url } = res.data;
        const userRef = doc(db, 'users', userId);
        await setDoc(
          userRef,
          {
            name,
            short_name,
            sortable_name,
            avatar_url,
          },
          { merge: true }
        );
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
    syncProfileOnFirebase();
  }, []);

  return profile;
}
