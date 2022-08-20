/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {validateEmail} from '../utils/validations';
import firebase from '../utils/firebase';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

export default function LoginForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else if (formData.password.length < 6) {
      errors.password = true;
      console.log('erros tamaño contra');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
        });
    }
    setFormError(errors);
    console.log(errors);
  };
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
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

      <TouchableOpacity onPress={login}>
        <Text style={styles.bntText}> Iniciar Sesión </Text>
      </TouchableOpacity>
      <View style={styles.bntInit}>
        <Button
          title="Registrate"
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
  };
}
const styles = StyleSheet.create({
  bntText: {
    color: '#fff',
    fontSize: 18,
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
