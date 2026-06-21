import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    TextInput,
    RefreshControl,
    Image,
    TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users',
            );

            const data = await response.json();

            setUsers(data);
            setFilteredUsers(data);
            setError('');
        } catch (e) {
            setError('Failed to load users');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = (text: string) => {
        setSearch(text);

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(text.toLowerCase()),
        );

        setFilteredUsers(filtered);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchUsers();
    };

    const renderUser = ({ item }: any) => (
        <View style={styles.userCard}>
            <Image
                source={{
                    uri: `https://ui-avatars.com/api/?background=1E40AF&color=ffffff&name=${item.name}`,
                }}
                style={styles.avatar}
            />

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

                <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                        React Native Developer
                    </Text>
                </View>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator
                    size="large"
                    color="#1E40AF"
                />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={filteredUsers}
                keyExtractor={item => item.id.toString()}
                renderItem={renderUser}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ListHeaderComponent={
                    <>
                        <LinearGradient
                            colors={['#0F172A', '#1E3A8A']}
                            style={styles.header}
                        >
                            <Text style={styles.title}>
                                Welcome Back 👋
                            </Text>

                            <Text style={styles.subtitle}>
                                React Native Internship Dashboard
                            </Text>
                        </LinearGradient>

                        <View style={styles.welcomeCard}>
                            <Text style={styles.welcomeTitle}>
                                Hello Sarika :)
                            </Text>

                            <Text style={styles.welcomeText}>
                                Week 4 Day 20 Successfully Completed
                            </Text>
                        </View>

                        <View style={styles.searchContainer}>
                            <Ionicons
                                name="search"
                                size={20}
                                color="#666"
                            />

                            <TextInput
                                placeholder="Search Team Member..."
                                value={search}
                                onChangeText={handleSearch}
                                style={styles.search}
                            />
                        </View>

                        <View style={styles.statsContainer}>
                            <View style={styles.statCard}>
                                <Text style={styles.emoji}>👥</Text>

                                <Text style={styles.number}>
                                    {users.length}
                                </Text>

                                <Text style={styles.statLabel}>
                                    Team Members
                                </Text>
                            </View>

                            <View style={styles.statCard}>
                                <Text style={styles.emoji}>✅</Text>

                                <Text style={styles.number}>
                                    20
                                </Text>

                                <Text style={styles.statLabel}>
                                    Tasks Done
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.sectionTitle}>
                            Team Members
                        </Text>
                    </>
                }
            />

            <TouchableOpacity style={styles.fab}>
                <Ionicons
                    name="add"
                    size={30}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        padding: 25,
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
    },

    subtitle: {
        color: '#CBD5E1',
        marginTop: 5,
    },

    welcomeCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 20,
        elevation: 5,
    },

    welcomeTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#0F172A',
    },

    welcomeText: {
        color: '#64748B',
        marginTop: 5,
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        paddingHorizontal: 15,
        borderRadius: 15,
        elevation: 4,
    },

    search: {
        flex: 1,
        marginLeft: 10,
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,
    },

    statCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },

    emoji: {
        fontSize: 28,
    },

    number: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1E40AF',
        marginTop: 5,
    },

    statLabel: {
        color: '#64748B',
        marginTop: 5,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        margin: 15,
        color: '#0F172A',
    },

    userCard: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 15,
        padding: 18,
        borderRadius: 22,
        flexDirection: 'row',
        elevation: 5,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
    },

    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0F172A',
    },

    email: {
        color: '#64748B',
        marginTop: 4,
    },

    phone: {
        color: '#64748B',
        marginTop: 2,
    },

    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#DBEAFE',
        marginTop: 8,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    badgeText: {
        color: '#1E40AF',
        fontSize: 12,
        fontWeight: '600',
    },

    fab: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        backgroundColor: '#1E40AF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
    },
});