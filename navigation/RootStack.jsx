import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { COLORS } from '../constants';
import LoginScreen from '../screens/Auth/LoginScreen';
import WebViewScreen from '../screens/WebViewScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{
          headerShown: true,
          title: 'How to get your Canvas access token',
          headerTintColor: COLORS.white,
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
