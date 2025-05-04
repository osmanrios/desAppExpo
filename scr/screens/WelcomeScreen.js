import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image 
                    source={require('../../assets/logoappclima.png')}
                    style={styles.logoImage} // Estilo para la imagen más pequeña
                />
            </View>
            <View style={styles.logi}>
                <Text style={styles.title}>¡Bienvenido a la App!</Text>
                <Button title="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={styles.reg}>
                <Button title="Registrarse" onPress={() => navigation.navigate('registrarse')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgb(12, 234, 237)',
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20
    },
    logi: {
        fontWeight: 'bold',
        alignItems: 'center', // Asegura que el contenido esté centrado
      
    },
    
    img: {
        marginBottom: 20, // Añadí un margen para separar la imagen del texto
    },
    logoImage: {
        width: 300, // Reducí el tamaño de la imagen
        height: 300, // Ajusta la altura
    },
    reg: {
        margin: 20,
        fontWeight: 'bold',
        alignItems: 'center',      
    },
});
