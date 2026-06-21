import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Colors = {
    primary: '#2563EB',
    white: '#FFFFFF',
};

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 18,
    },

    title: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: '700',
    },
});

export default Header;