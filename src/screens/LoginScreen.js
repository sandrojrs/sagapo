import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import TransparentButton from '../components/Button';
import TextInputWithLabel from '../components/TextInputWithLabel';
import Logo from '../components/Logo';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [data, setData] = useState(null);

    const handleEmailLogin = async () => {
        try {
            const response = await apiService.post('/login', { email, code });
            if (response.status === 200) {
                // Lógica para redirecionar o usuário para a próxima tela ou realizar ações após o login
            } else {
                console.error('Erro ao efetuar o login');
            }
        } catch (error) {
            console.error('Erro ao efetuar o login:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Logo source={require('../../assets/icon.png')} />
            <Logo source={require('../../assets/icon.png')} />
            <Text style={styles.title}>Login</Text>
            <TextInputWithLabel placeholder="admin@hotmail.com" value={email} label='Email' onChangeText={text => setEmail(text)} />
            <TextInputWithLabel placeholder="12345" value={code} label='Código' onChangeText={text => setCode(text)} />
            <TransparentButton title="Enviar código" color="green" onPress={handleEmailLogin} />
            <TransparentButton title="Logar" onPress={handleEmailLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LoginScreen;