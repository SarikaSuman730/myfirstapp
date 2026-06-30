import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

const AppCard = ({
    children,
}: any) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

export default AppCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 18,

        marginVertical: 8,

        elevation: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
});