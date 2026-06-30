import React from 'react';
import {
    TouchableOpacity,
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

interface FilterChipProps {
    title: string;
    selected: boolean;
    onPress: () => void;
}

const FilterChip = ({
    title,
    selected,
    onPress,
}: FilterChipProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
                styles.container,
                selected && styles.selectedContainer,
            ]}>

            <Text
                style={[
                    styles.text,
                    selected && styles.selectedText,
                ]}>
                {title}
            </Text>

        </TouchableOpacity>
    );
};

export default FilterChip;

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm,

        borderRadius: Radius.round,

        backgroundColor: Colors.surface,

        marginRight: Spacing.sm,

        borderWidth: 1,
        borderColor: Colors.border,
    },

    selectedContainer: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },

    text: {
        color: Colors.textSecondary,
        fontSize: FontSize.md,
        fontWeight: FontWeight.medium,
    },

    selectedText: {
        color: Colors.white,
        fontWeight: FontWeight.bold,
    },

});