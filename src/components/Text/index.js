import React from 'react';

import {Text as ReactText, StyleSheet} from 'react-native';

export const TextLight = ({style, children}) => (
  <ReactText style={[styles.light, style]}>{children}</ReactText>
);

export const TextRegular = ({style, children}) => (
  <ReactText style={[styles.regular, style]}>{children}</ReactText>
);

export const TextBold = ({style, children}) => (
  <ReactText style={[styles.bold, style]}>{children}</ReactText>
);

const styles = StyleSheet.create({
  light: {
    fontFamily: 'Roboto-Light',
  },
  regular: {
    fontFamily: 'Roboto-Regular',
  },
  bold: {
    fontFamily: 'Roboto-Medium',
  },
});
