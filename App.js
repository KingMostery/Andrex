/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {decode, encode} from 'base-64';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';

import 'firebase/auth';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import ListBirthday from './src/components/ListBirthday';

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(response => {
      setUser(response);
    });
  }, []);
  if (user === undefined) return null;
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListBirthday user={user} /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15242b',
    height: '100%',
  },
});
