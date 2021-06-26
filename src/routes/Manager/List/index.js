import React from 'react';

import {StyleSheet, Text, View, SectionList} from 'react-native';

import {useCtxGlobal} from '../../../context';

import SafeArea from '../../../components/SafeAreaView';
import StatusBar from '../../../components/StatusBar';

import ListItem from './components/ListItem';

const List = ({navigation}) => {
  const {state} = useCtxGlobal();
  const {isDarkMode} = state;

  const sections = [
    {
      title: 'Portieri',
      data: [
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 8,
          yellow: 2,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 1,
          goals: 0,
          yellow: 0,
          red: 0,
        },
      ],
    },
    {
      title: 'Difensori',
      data: [
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
      ],
    },
    {
      title: 'Centrocampisti',
      data: [
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
      ],
    },
    {
      title: 'Attaccanti',
      data: [
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
        {
          name: 'Paolino Paperino',
          team: 'AS Pippe',
          caps: 10,
          goals: 1,
          yellow: 0,
          red: 0,
        },
      ],
    },
  ];
  return (
    <SafeArea isDarkMode={isDarkMode}>
      <StatusBar isDarkMode={isDarkMode} />
      <View style={styles.main}>
        <View style={styles.head}>
          <Text>AS Pippe</Text>
          <Text>Lista giocatori</Text>
        </View>
        <View style={styles.list}>
          <SectionList
            sections={sections}
            renderItem={({item}) => (
              <ListItem data={item} navigation={navigation} />
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.listheader}>{title}</Text>
            )}
            keyExtractor={(item, index) => `${item.name}-${index}`}
          />
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  head: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  list: {
    flex: 7,
    borderTopWidth: 1,
    borderTopColor: '#d0d0d0',
  },
  listheader: {
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    textTransform: 'uppercase',
    backgroundColor: '#d0d0d0',
  },
});

export default List;
