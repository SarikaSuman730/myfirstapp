import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    children: React.ReactNode;
    size?: number;
    color?: string;
    weight?: any;
    style?: any;
}

const AppText = ({
    children,
    size = 16,
    color = '#111827',
    weight = '400',
    style,
}: Props) => {
    return (
        <Text
            style={[
                styles.text,
                {
                    fontSize: size,
                    color,
                    fontWeight: weight,
                },
                style,
            ]}>
            {children}
        </Text>
    );
};

export default AppText;

const styles = StyleSheet.create({
    text: {
        letterSpacing: 0.3,
    },
});