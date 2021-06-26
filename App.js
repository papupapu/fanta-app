import 'react-native-gesture-handler';
import React from 'react';

import {useColorScheme} from 'react-native';

import {GlobalStateProvider} from './src/context';

import Routes from './src';

const Root = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const initialState = {
    isDarkMode,
    user: {
      isAuth: false,
    },
  };

  return (
    <GlobalStateProvider initialState={initialState}>
      <Routes />
    </GlobalStateProvider>
  );
};
export default Root;
