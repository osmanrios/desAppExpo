import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { registrarUsuario } from '../db/database';

export default function RegistrarseScreen({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');

  const handleRegister = () => {
    if (!correo || !contraseña || !confirmarContraseña) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (contraseña.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    registrarUsuario(correo, contraseña,
      () => {
        Alert.alert('Éxito', 'Usuario registrado');
        navigation.navigate('Login');
      },
      error => Alert.alert('Error', error.message)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
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
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        onChangeText={setConfirmarContraseña}
        value={confirmarContraseña}
        secureTextEntry
        style={[styles.input, styles.inputMarginTop]}
      />
      <Button title="Registrar" onPress={handleRegister} />
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
