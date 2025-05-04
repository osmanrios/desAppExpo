import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,Image } from 'react-native';
import { loginUsuario } from '../db/database'; // Asegúrate que la ruta sea correcta

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
       <View style={styles.img}>
                            <Image 
                                source={require('../../assets/logoappclima.png')}
                                style={styles.logoImage} // Estilo para la imagen más pequeña
                            />
                        </View>
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
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="registrarse" onPress={() => navigation.navigate('registrarse')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(12, 234, 237)',
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    padding: 20,
  },
  title: {
    color:'white' ,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  inputMarginTop: {
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 15,
  },
  logoImage:{
    width: 300, // Reducí el tamaño de la imagen
        height: 300, // Ajusta la altura
  },
  img: {
    alignItems:'center',
  },
  
});

