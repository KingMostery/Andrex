/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {initializeApp} from 'firebase';
import React, {useState} from 'react';
import {validateEmail} from '../utils/validations';
import firebase from '../utils/firebase';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function RegisterForm(props) {
  const {changeForm} = props;
  const [formData, setformData] = useState(defaultValue());
  const [formError, setformError] = useState({});

  const register = () => {
    let errors = {};
    if (!formData.email || !formData.password || !formData.repeatPassword) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      if (!formData.repeatPassword) errors.repeatPassword = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else if (formData.password !== formData.repeatPassword) {
      errors.password = true;
      errors.repeatPassword = true;
    } else if (formData.password.length < 6) {
      errors.password = true;
      errors.repeatPassword = true;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setformError({
            email: true,
            password: true,
            repeatPassword: true,
          });
        });
    }

    setformError(errors);
    console.log(errors);
  };

  const onChange = (e, type) => {
    setformData({...formData, [type]: e.nativeEvent.text});
  };
  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.errorInpunt]}
        placeholder="Correo electronico"
        placeholderTextColor="#969696"
        onChange={e => onChange(e, 'email')}
      />
      <TextInput
        style={[styles.input, formError.password && styles.errorInpunt]}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={e => onChange(e, 'password')}
      />
      <TextInput
        style={[styles.input, formError.repeatPassword && styles.errorInpunt]}
        placeholder="Repetir contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={e => onChange(e, 'repeatPassword')}
        /* onChange={e =>
          setformData({...formData, repeatPassword: e.nativeEvent.text})
        } */
      />
      <TouchableOpacity onPress={register}>
        <Text style={styles.bntText}>Registrarse</Text>
      </TouchableOpacity>
      <View style={styles.bntInit}>
        <Button
          title="Iniciar sesión"
          style={styles.bntInit}
          color="#ff5c5c"
          onPress={changeForm}
        />
      </View>
    </>
  );
}

function defaultValue() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}

const styles = StyleSheet.create({
  bntText: {
    color: '#fff',
    fontSize: 17,
  },
  input: {
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
  bntInit: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    borderRadius: 99,
    color: '#ff5c5c',
  },
  errorInpunt: {
    borderColor: '#FF5733',
    borderWidth: 2,
  },
});

