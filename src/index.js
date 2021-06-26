import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useCtxGlobal} from './context';

import Login from './routes/Auth/Login';
import Register from './routes/Auth/Register';

import Home from './routes/Manager/Home';
import Pippo from './routes/Manager/Pippo';
import Team from './routes/Manager/Team';

const Stack = createStackNavigator();

const Routes = () => {
  const {state} = useCtxGlobal();
  const {
    user: {isAuth},
  } = state;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Team" component={Team} />
            <Stack.Screen name="Pippo" component={Pippo} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
