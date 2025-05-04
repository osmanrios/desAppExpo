import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,Image } from 'react-native';
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

       <View style={styles.img}>
                      <Image 
                          source={require('../../assets/logoappclima.png')}
                          style={styles.logoImage} // Estilo para la imagen más pequeña
                      />
                  </View>
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
  
      
      <View style={styles.buttonContainer}>
        <Button title="Registrar" onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgb(12, 234, 237)',
    padding: 20,
  },
  logoImage:{
    width: 300, // Reducí el tamaño de la imagen
        height: 300, // Ajusta la altura
  },
  img: {
    alignItems:'center',
  
  },
  buttonContainer: {
    marginTop: 30, // Esto agrega el margen para mover el botón hacia abajo
  },
  title: {
    color: 'white',
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
    color:'white',
  },
});
