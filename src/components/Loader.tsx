import React from 'react';
import {
    Modal,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

interface LoaderProps {
    visible: boolean;
    text?: string;
}

const Loader = ({
    visible,
    text = 'Loading...',
}: LoaderProps) => {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <ActivityIndicator
                        size="large"
                        color="#6C63FF"
                    />

                    <Text style={styles.text}>
                        {text}
                    </Text>
                </View>
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        width: 180,
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 24,
        alignItems: 'center',

        elevation: 10,
    },

    text: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
});