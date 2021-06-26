import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useCtxGlobal} from '../../../context';

import SafeArea from '../../../components/SafeAreaView';
import StatusBar from '../../../components/StatusBar';
import MaterialIcon from '../../../components/Icon';

import List from '../List';

const Tab = createBottomTabNavigator();

const TeamHome = () => {
  const {state} = useCtxGlobal();
  const {isDarkMode} = state;
  return (
    <SafeArea isDarkMode={isDarkMode}>
      <StatusBar isDarkMode={isDarkMode} />
      <View style={styles.main}>
        <Text>Team!!!</Text>
      </View>
    </SafeArea>
  );
};

const Team = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TeamHome') {
            iconName = 'home';
          } else if (route.name === 'List') {
            iconName = 'soccer';
          }

          // You can return any component that you like here!
          return <MaterialIcon size="large" color={color} name={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="TeamHome" component={TeamHome} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Team;
