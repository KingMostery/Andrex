/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Birthday(props) {
  const {birthday, delateBirthday} = props;
  const pasat = birthday.days > 0 ? true : false;

  const infoDate = () => {
    if (birthday.days === 0) {
      return <Text style={{color: '#ffff'}}>es su compleaños</Text>;
    } else {
      const days = -birthday.days;
      return (
        <View style={styles.textCurrent}>
          <Text>{days}</Text>
          <Text>{days === 1 ? 'Dia' : 'Dias'}</Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        pasat
          ? styles.pasat
          : birthday.days === 0
          ? styles.actual
          : styles.current,
      ]}
      onPress={() => delateBirthday(birthday)}>
      <Text style={styles.userName}>
        {birthday.name}
        {birthday.lastname}
      </Text>
      {pasat ? <Text style={{color: '#fff'}}>Pasado</Text> : infoDate()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
  },
  actual: {
    backgroundColor: '#77dd77',
  },
  current: {
    backgroundColor: '#fdfd96',
  },
  pasat: {
    backgroundColor: '#ff6961',
  },
  userName: {
    color: '#ffff',
    fontSize: 16,
  },
  userName2: {
    color: '#ff6961',
    fontSize: ' ',
  },
  textCurrent: {
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 90,
    alignItems: 'center',
  },
});

/* .color1 {color: #12160b;}
.color2 {color: #12425b;}
.color3 {color: #e58123;}
.color4 {color: #f1d17a;}
.color5 {color: #f8efd7;} */
