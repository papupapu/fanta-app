import React from 'react';

import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const ListItem = ({data, navigation}) => {
  const onPressButton = () => navigation.navigate('Pippo');
  return (
    <TouchableWithoutFeedback onPress={onPressButton} underlayColor="white">
      <View style={styles.main}>
        <View style={styles.icon} />
        <View style={styles.data}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.infos}>
            <Text style={styles.infosEl}>{`Caps: ${data.caps}`}</Text>
            <Text style={styles.infosEl}>{`Goals: ${data.goals}`}</Text>
            {data.yellow !== 0 && (
              <Text style={styles.infosEl}>{`Yellow: ${data.goals}`}</Text>
            )}
            {data.red !== 0 && (
              <Text style={styles.infosEl}>{`Red: ${data.red}`}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 33,
    backgroundColor: '#FFF',
  },
  icon: {
    marginRight: 8,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#d0d0d0',
  },
  data: {
    justifyContent: 'center',
  },
  name: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infos: {
    flexDirection: 'row',
  },
  infosEl: {
    marginRight: 4,
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

export default ListItem;
