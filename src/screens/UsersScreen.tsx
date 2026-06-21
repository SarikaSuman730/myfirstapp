import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    TextInput,
    RefreshControl,
} from 'react-native';

const UsersScreen = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users',
            );

            const data = await response.json();

            setUsers(data);
            setFilteredUsers(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchUsers();
    };

    const handleSearch = (text: string) => {
        setSearch(text);

        const filtered = users.filter((user: any) =>
            user.name.toLowerCase().includes(text.toLowerCase()),
        );

        setFilteredUsers(filtered);
    };

    const renderUser = ({ item }: any) => (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {item.name.charAt(0)}
                </Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                    {item.name}
                </Text>

                <Text style={styles.email}>
                    {item.email}
                </Text>

                <Text style={styles.phone}>
                    {item.phone}
                </Text>

                <Text style={styles.role}>
                    React Native Developer
                </Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator
                    size="large"
                    color="#0A1F44"
                />

                <Text style={{ marginTop: 10 }}>
                    Loading Team Members...
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Team Members
                </Text>

                <Text style={styles.subtitle}>
                    Public API Integration
                </Text>
            </View>

            <TextInput
                placeholder="Search Team Member..."
                value={search}
                onChangeText={handleSearch}
                style={styles.searchBox}
            />

            <FlatList
                data={filteredUsers}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderUser}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FA',
    },

    header: {
        backgroundColor: '#0A1F44',
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    subtitle: {
        color: '#ddd',
        marginTop: 4,
    },

    searchBox: {
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        elevation: 3,
    },

    card: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 12,
        borderRadius: 16,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
    },

    avatar: {
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#0A1F44',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },

    avatarText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#111',
    },

    email: {
        color: '#666',
        marginTop: 2,
    },

    phone: {
        color: '#777',
        marginTop: 2,
    },

    role: {
        color: '#0A1F44',
        fontWeight: '600',
        marginTop: 5,
    },

    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});