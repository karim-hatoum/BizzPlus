import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from './screens/homeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/loginScreen';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name='Home' component={HomeScreen}/>
        <stack.Screen name='SignUp' component={SignUpScreen}/>
        <stack.Screen name='Login' component={LoginScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
