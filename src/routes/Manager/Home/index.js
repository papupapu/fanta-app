import React from 'react';

import {StyleSheet, View, Button} from 'react-native';

import {useCtxGlobal} from '../../../context';

import SafeArea from '../../../components/SafeAreaView';
import StatusBar from '../../../components/StatusBar';
import {TextLight, TextRegular, TextBold} from '../../../components/Text';

const Home = ({navigation}) => {
  const {state} = useCtxGlobal();
  const {
    isDarkMode,
    user: {name, id, email},
    team,
  } = state;

  return (
    <SafeArea isDarkMode={isDarkMode}>
      <StatusBar isDarkMode={isDarkMode} />
      <View style={styles.main}>
        <TextBold>Benevenuto {name}</TextBold>
        <TextLight>il tuo id è {id}</TextLight>
        <TextLight>la tua email è {email}</TextLight>
        {team ? (
          <>
            <Button
              title="Go to Team"
              onPress={() => navigation.navigate('Team')}
            />
            <Button
              title="Go to Pippo"
              onPress={() => navigation.navigate('Pippo')}
            />
          </>
        ) : (
          <>
            <TextBold>Sembra tu non abbia ancora creato una squadra</TextBold>
            <Button
              title="Create Team"
              onPress={() => navigation.navigate('Team')}
            />
          </>
        )}
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

export default Home;
