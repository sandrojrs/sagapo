import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import TextInputWithLabel from '../components/TextInputWithLabel'
import PickerScreen from '../components/PickerScreen';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [location, setLocation] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleRegister = async () => {
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

    const navigation = useNavigation();

    const handleLoginNavigation = () => {
        navigation.navigate('Login'); // Navegar para a tela de login
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLoginNavigation}>
                <Text>Navegar para a tela de login</Text>
            </TouchableOpacity>

            <Logo source={require('../../assets/icon.png')} />
            <Logo source={require('../../assets/icon.png')} />
            <TextInputWithLabel placeholder="admin@hotmail.com" value={email} label='Email' onChangeText={text => setEmail(text)} />
            <PickerScreen label="Genero" selectedValue={gender} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} />
            <TextInputWithLabel placeholder="avenida municipal" value={location} label='Localização' onChangeText={text => setLocation(text)} />
            <View style={styles.checkboxContainer}>
                <Checkbox
                    checked={acceptedTerms}
                    onPress={() => setAcceptedTerms(!acceptedTerms)}
                />
                <Text>Aceito os termos e condições</Text>
            </View>
            <Button title="Cadastrar" onPress={handleRegister} color="black"></Button>
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
    welcomeText: {
        fontSize: 18,
        marginTop: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
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

export default RegisterScreen;