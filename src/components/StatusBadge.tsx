import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {
    Colors,
    FontSize,
    FontWeight,
    Radius,
    Spacing,
} from '../theme';

interface StatusBadgeProps {
    status: 'Active' | 'On Leave' | 'Completed';
}

const StatusBadge = ({
    status,
}: StatusBadgeProps) => {

    const getBackgroundColor = () => {
        switch (status) {
            case 'Active':
                return '#DCFCE7';

            case 'On Leave':
                return '#FEF3C7';

            case 'Completed':
                return '#DBEAFE';

            default:
                return Colors.surface;
        }
    };

    const getTextColor = () => {
        switch (status) {
            case 'Active':
                return '#15803D';

            case 'On Leave':
                return '#B45309';

            case 'Completed':
                return '#1D4ED8';

            default:
                return Colors.textPrimary;
        }
    };

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: getBackgroundColor(),
                },
            ]}>

            <Text
                style={[
                    styles.text,
                    {
                        color: getTextColor(),
                    },
                ]}>
                {status}
            </Text>

        </View>
    );
};

export default StatusBadge;

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: Spacing.md,
        paddingVertical: 6,

        borderRadius: Radius.round,

        alignSelf: 'flex-start',
    },

    text: {
        fontSize: FontSize.sm,
        fontWeight: FontWeight.bold,
    },

});