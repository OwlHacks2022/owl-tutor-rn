import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://canvas.instructure.com/api/v1',
});

instance.interceptors.request.use(
  async config => {
    console.log(config);
    let token;
    try {
      token = await AsyncStorage.getItem('token');
    } catch (e) {
      console.log(e);
    }

    if (!!token) {
      //  config.headers['Authorization'] = 'Bearer ' + token;
      //config.params = {
      //  access_token: token,
      //};
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
