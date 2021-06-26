import React, {useState} from 'react';

import {StyleSheet, View, TextInput, Button} from 'react-native';

import {useCtxGlobal} from '../../../context';

import SafeArea from '../../../components/SafeAreaView';
import StatusBar from '../../../components/StatusBar';

import {TextBold} from '../../../components/Text';

const Login = ({navigation}) => {
  const {state, dispatch} = useCtxGlobal();
  const {isDarkMode} = state;

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const login = async () => {
    const userLogin = await fetch('http://localhost:4000/users/getuser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        email,
      }),
    }).then(res => res);
    const user = await userLogin.json();
    if (!user.error && user[0]) {
      dispatch('auth', user[0]);
    } else {
      setError({
        msg: 'Utente sconosciuto',
      });
    }
  };

  return (
    <SafeArea isDarkMode={isDarkMode}>
      <StatusBar isDarkMode={isDarkMode} />
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Insert name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          placeholder="Insert email"
        />
        {error && <TextBold>{error.msg}</TextBold>}
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button title="Login" onPress={login} />
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
