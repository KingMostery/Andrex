/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, View, StyleSheet, StatusBar, Button } from 'react-native';

import 'firebase/auth';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import ListBirthday from './src/components/ListBirthday';
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
        {user ? <ListBirthday /> : <Auth />}
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


