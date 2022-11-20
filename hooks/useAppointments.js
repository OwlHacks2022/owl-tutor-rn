import { useEffect, useState, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';

export default function useAppointments() {
  const [appointments, setAppointments] = useState([]);

  const pastAppointments = useMemo(() => {
    return appointments.filter(appointment => appointment.date < new Date());
  }, [appointments]);

  const activeAppointments = useMemo(() => {
    return appointments.filter(appointment => appointment.date >= new Date());
  }, [appointments]);

  const syncAppointments = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const appointmentsRef = collection(db, 'users', userId, 'appointments');
      const qs = await getDocs(appointmentsRef);
      setAppointments([]);
      qs.forEach(doc => {
        setAppointments(prevAppointments => [
          ...prevAppointments,
          {
            id: doc.id,
            ...doc.data(),
          },
        ]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addAppointment = async (subject, tutor, date) => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const appointmentsRef = collection(db, 'users', userId, 'appointments');
      await addDoc(appointmentsRef, {
        subject,
        tutor,
        date,
      });
      await syncAppointments();
    } catch (error) {
      console.error(error);
    }
  };

  const cancelAppointment = async id => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const appointmentRef = doc(db, 'users', userId, 'appointments', id);
      await deleteDoc(appointmentRef);
      await syncAppointments();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    activeAppointments,
    pastAppointments,
    addAppointment,
    cancelAppointment,
    syncAppointments,
  };
}
