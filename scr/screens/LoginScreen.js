import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { loginUsuario } from '../db/database';

export default function LoginScreen({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = () => {
    if (!correo || !contraseña) {
      Alert.alert('Error', 'Por favor ingresa correo y contraseña');
      return;
    }

    loginUsuario(correo, contraseña, isValid => {
      if (isValid) {
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', 'Correo o contraseña incorrectos');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo"
        onChangeText={setCorreo}
        value={correo}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setContraseña}
        value={contraseña}
        secureTextEntry
        style={[styles.input, styles.inputMarginTop]}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Registrarse" onPress={() => navigation.navigate('RegistrarseScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  inputMarginTop: {
    marginTop: 10,
  },
});
