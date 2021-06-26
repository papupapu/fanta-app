import React, {useState} from 'react';

import {StyleSheet, View, TextInput} from 'react-native';

import {useCtxGlobal} from '../../../context';

import SafeArea from '../../../components/SafeAreaView';
import StatusBar from '../../../components/StatusBar';

const Login = () => {
  const {state} = useCtxGlobal();
  const {isDarkMode} = state;

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <SafeArea isDarkMode={isDarkMode}>
      <StatusBar isDarkMode={isDarkMode} />
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="insert name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="inser email"
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
  input: {
    height: 40,
    marginVertical: 12,
    width: '50%',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default Login;
