import React from 'react';

import {StatusBar} from 'react-native';

const Status = ({isDarkMode}) => (
  <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
);

export default Status;
