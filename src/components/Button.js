import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const TransparentButton = ({ title, color, onPress }) => {
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: color || 'blue',
            marginBottom: 10,
            marginTop: 10,
            width: '100%',
            borderRadius: 50
        },
        text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
    });

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default TransparentButton;