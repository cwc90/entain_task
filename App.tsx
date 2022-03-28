import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from '_types';
import {Home} from '_screens';

const HomeStack = createNativeStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
