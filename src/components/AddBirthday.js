/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function AddBirthday() {
  const [formData, setFormData] = useState({});
  const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);

  const hideDatePicker = () => {
    setIsDatePicketVisible(false);
  };

  const handlerConfirm = date => {
    const dateBirth = date;
    dateBirth.setHours(0);
    dateBirth.setMinutes(0);
    dateBirth.setSeconds(0);
    setFormData({...formData, dateBirth});
    hideDatePicker();
  };

  const showDatePicker = () => {
    setIsDatePicketVisible(true);
  };

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  const onSubmit = () => {
    console.log(formData);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Nombre"
          placeholderTextColor="#969696"
          onChange={e => onChange(e, 'name')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Apellido"
          placeholderTextColor="#969696"
          onChange={e => onChange(e, 'lastname')}
        />
        <View style={[styles.textInput, styles.datePicker]}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: formData.dateBirth ? '#fff' : '#969696',
              fontSize: 18,
            }}
            onPress={showDatePicker}>
            {formData.dateBirth
              ? moment(formData.dateBirth).format('LL')
              : 'Fecha de Nacimiento'}
          </Text>
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.viewCreateBirthday}>Crear cumpleaños</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePicketVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
  datePicker: {
    justifyContent: 'center',
  },
  textDate: {
    color: '#969696',
    fontSize: 18,
  },
  viewCreateBirthday: {
    backgroundColor: '#e38e15',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
});
