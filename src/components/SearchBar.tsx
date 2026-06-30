import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    Colors,
    FontSize,
    Spacing,
    Radius,
} from '../theme';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const SearchBar = ({
    value,
    onChangeText,
    placeholder = 'Search Team Member...',
}: SearchBarProps) => {
    return (
        <View style={styles.container}>
            <Icon
                name="search"
                size={22}
                color={Colors.textSecondary}
            />

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.textLight}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />

            {value.length > 0 && (
                <Icon
                    name="close-circle"
                    size={22}
                    color={Colors.textSecondary}
                    onPress={() => onChangeText('')}
                />
            )}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: Colors.surface,

        marginHorizontal: Spacing.lg,
        marginVertical: Spacing.md,

        paddingHorizontal: Spacing.lg,

        height: 58,

        borderRadius: Radius.xl,

        elevation: 5,

        shadowColor: Colors.shadow,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    input: {
        flex: 1,

        marginLeft: Spacing.md,

        color: Colors.textPrimary,

        fontSize: FontSize.base,
    },
});