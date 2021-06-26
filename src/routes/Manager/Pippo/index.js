import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

import {useCtxGlobal} from '../../../context';

import SafeArea from '../../../components/SafeAreaView';
import StatusBar from '../../../components/StatusBar';

const Pippo = ({navigation}) => {
  const {state} = useCtxGlobal();
  const {isDarkMode} = state;
  return (
    <SafeArea isDarkMode={isDarkMode}>
      <StatusBar isDarkMode={isDarkMode} />
      <View style={styles.main}>
        <Text>pippo!!!</Text>
        <Button
          title="Go to Pippo... again"
          onPress={() => navigation.push('Pippo')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pippo;
