import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Game from './src/screens/Game';
import Home from './src/screens/Home';
import SelectPlayers from './src/screens/SelectPlayers';

type RootNativeStackParamsList = {
  Game: undefined;
  Home: undefined;
  SelectPlayers: undefined;
};

const NativeStack = createNativeStackNavigator<RootNativeStackParamsList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <NativeStack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Game"
        >
          <NativeStack.Screen name='SelectPlayers' component={SelectPlayers}/>
          <NativeStack.Screen name='Home' component={Home}/>
          <NativeStack.Screen name='Game' component={Game}/>
        </NativeStack.Navigator>
      </NavigationContainer>
    </>
  );
}
