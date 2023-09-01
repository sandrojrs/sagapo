import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerScreen = ({ label, selectedValue, onValueChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    itemStyle={styles.itemStyle}
                    mode='dropdown'
                    pickerStyleType={styles.picker}
                >
                    <Picker.Item label="Masculino" value="option1" />
                    <Picker.Item label="Feminino" value="option2" />
                    <Picker.Item label="Outros" value="option3" />
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    label: {
        marginBottom: 5,
        marginLeft: 5,
        marginBottom: 5
    },
    picker: {
        width: 350,
        height: 35,
        paddingBottom: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginBottom: 10,
    },
    pickerItem: {
        fontSize: 12,
    },
});

export default PickerScreen;