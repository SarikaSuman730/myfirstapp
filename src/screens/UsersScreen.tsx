import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    RefreshControl,
} from 'react-native';

import {
    Colors,
    FontSize,
    FontWeight,
    Spacing,
    Radius,
} from '../theme';

import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

const UsersScreen = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
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

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(text.toLowerCase()) ||
            user.email.toLowerCase().includes(text.toLowerCase()) ||
            user.company.name.toLowerCase().includes(text.toLowerCase()),
        );

        setFilteredUsers(filtered);
    };

    const renderUser = ({ item }: { item: User }) => (
        <UserCard item={item} />
    );

    if (loading) {
        return (
            <Loader
                visible={true}
                text="Loading Team Members..."
            />
        );
    }

    return (
        <View style={styles.container}>

            {/* Header */}

            <View style={styles.header}>

                <Text style={styles.heading}>
                    Team Members
                </Text>

                <Text style={styles.subHeading}>
                    React Native Internship Dashboard
                </Text>

                {/* Statistics */}

                <View style={styles.statsContainer}>

                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>
                            {users.length}
                        </Text>

                        <Text style={styles.statLabel}>
                            Members
                        </Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>
                            {filteredUsers.length}
                        </Text>

                        <Text style={styles.statLabel}>
                            Results
                        </Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>
                            API
                        </Text>

                        <Text style={styles.statLabel}>
                            Live
                        </Text>
                    </View>

                </View>

            </View>

            {/* Search */}

            <SearchBar
                value={search}
                onChangeText={handleSearch}
                placeholder="Search Team Members..."
            />

            {/* User List */}

            <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUser}
                showsVerticalScrollIndicator={false}

                ListEmptyComponent={
                    <EmptyState
                        title="No Team Member Found"
                    />
                }

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[Colors.secondary]}
                    />
                }

                contentContainerStyle={{
                    paddingBottom: Spacing.xxl,
                }}
            />
        </View>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    header: {
        backgroundColor: Colors.secondary,

        paddingTop: Spacing.xl,
        paddingBottom: Spacing.xxxl,
        paddingHorizontal: Spacing.xl,

        borderBottomLeftRadius: Radius.xxl,
        borderBottomRightRadius: Radius.xxl,
    },

    heading: {
        color: Colors.white,
        fontSize: FontSize.xxl,
        fontWeight: FontWeight.bold,
    },

    subHeading: {
        color: Colors.textLight,
        marginTop: Spacing.xs,
        fontSize: FontSize.md,
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Spacing.xl,
    },
    statCard: {
        flex: 1,
        backgroundColor: Colors.surface,

        marginHorizontal: Spacing.xs,
        paddingVertical: Spacing.lg,

        borderRadius: Radius.xl,

        alignItems: 'center',

        elevation: 5,

        shadowColor: Colors.shadow,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    statNumber: {
        fontSize: FontSize.xl,
        fontWeight: FontWeight.bold,
        color: Colors.secondary,
    },

    statLabel: {
        marginTop: Spacing.xs,
        color: Colors.textSecondary,
        fontSize: FontSize.sm,
        fontWeight: FontWeight.semiBold,
    },
});
