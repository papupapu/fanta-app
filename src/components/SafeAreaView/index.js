import React from 'react';

import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const SafeArea = ({isDarkMode, children}) => (
  <SafeAreaView
    style={[
      styles.AndroidSafeArea,
      {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      },
    ]}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SafeArea;
