import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

const SearchBar = ({
    value,
    onChangeText,
}: any) => {
    return (
        <TextInput
            placeholder="Search..."
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
        />
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',

        height: 55,

        borderRadius: 15,

        paddingHorizontal: 20,

        marginVertical: 10,

        elevation: 4,
    },
});