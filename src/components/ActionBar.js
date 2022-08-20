/* eslint-disable prettier/prettier */

import React from 'react';
import firebase from '../utils/firebase';
import {StyleSheet, Text, View} from 'react-native';

export default function ActionBar(props) {
  const {showList, setShowList} = props;
  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewClose}>
        <Text
          style={styles.textLogout}
          onPress={() => firebase.auth().signOut()}>
          Cerrar Sesión
        </Text>
      </View>

      <View style={styles.viewAdd}>
        <Text style={styles.textAdd} onPress={() => setShowList(!showList)}>
          {showList ? 'Nueva Fecha' : 'Cancelar Fecha'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  viewClose: {
    backgroundColor: '#f1eaf2',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textLogout: {
    fontSize: 15,
    textAlign: 'center',
  },
  viewAdd: {
    backgroundColor: '#e38e15',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textAdd: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
});
