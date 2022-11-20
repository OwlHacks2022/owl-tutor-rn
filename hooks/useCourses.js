import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import canvasApi from '../api/canvas-api';
import JSONBigInt from 'json-bigint';

export default function useCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const res = await canvasApi.get(`/courses?access_token=${token}`, {
          transformResponse: [data => data],
        });
        const data = JSONBigInt.parse(res.data);
        setCourses(
          data.map(course => ({
            name: course.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);

  return courses;
}
