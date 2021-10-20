import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SignupScreen from '../screens/SignupScreen'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      
    </Stack.Navigator>
  );
}


