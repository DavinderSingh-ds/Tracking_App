import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignInScreen from './src/screens/SigninScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainFlow from './src/Navigators/BottomNavigators';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
          initialRouteName='SignUp' 
          screenOptions={{
            headerShown: false,}}
        >
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="MainFlow" component={MainFlow} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App ref={( navigator ) => { setNavigator(navigator) }}/>
    </AuthProvider>
  );
};