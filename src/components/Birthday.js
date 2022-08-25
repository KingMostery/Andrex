/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Birthday(props) {
  const {birthday} = props;
  return (
    <View>
      <Text> {birthday.name}{birthday.lastname} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
