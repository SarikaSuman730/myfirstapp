import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const EmptyState = ({
    title = 'No Data Found',
}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>
                📭
            </Text>

            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
};

export default EmptyState;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
    },

    icon: {
        fontSize: 60,
    },

    text: {
        marginTop: 15,
        fontSize: 18,
        color: '#6B7280',
    },
});