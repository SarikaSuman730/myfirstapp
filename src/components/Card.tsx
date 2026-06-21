import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Card = ({ title }: any) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 15,
        marginBottom: 15,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },

    text: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Card;