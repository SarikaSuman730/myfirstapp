import React, {
    useState,
    useMemo,
    useCallback,
} from 'react';

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

import { interns } from '../data/interns';

import { Intern } from '../types/intern';

import SearchBar from '../components/SearchBar';
import FilterChip from '../components/FilterChip';
import InternCard from '../components/InternCard';
import EmptyState from '../components/EmptyState';

const filters = [
    'All',
    'Active',
    'On Leave',
    'Completed',
];

const InternDirectoryScreen = () => {

    const [search, setSearch] = useState('');

    const [selectedFilter, setSelectedFilter] =
        useState('All');

    const [refreshing, setRefreshing] =
        useState(false);

    const onRefresh = useCallback(() => {

        setRefreshing(true);

        setTimeout(() => {

            setRefreshing(false);

        }, 1000);

    }, []);

    const filteredInterns = useMemo(() => {

        return interns.filter((intern) => {

            const matchesSearch =
                intern.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                intern.department
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                intern.email
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesFilter =
                selectedFilter === 'All'
                    ? true
                    : intern.status === selectedFilter;

            return (
                matchesSearch &&
                matchesFilter
            );

        });

    }, [
        search,
        selectedFilter,
    ]);

    const renderItem = useCallback(

        ({ item }: { item: Intern }) => (

            <InternCard intern={item} />

        ),

        [],
    );

    return (
        <View style={styles.container}>

            {/* Header */}

            <View style={styles.header}>

                <Text style={styles.welcome}>
                    👋 Good Morning
                </Text>

                <Text style={styles.heading}>
                    Intern Directory
                </Text>

                <Text style={styles.subHeading}>
                    Manage all interns efficiently
                </Text>

            </View>

            {/* Statistics */}

            <View style={styles.statsContainer}>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {interns.length}
                    </Text>

                    <Text style={styles.statLabel}>
                        Total
                    </Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {
                            interns.filter(
                                i => i.status === 'Active',
                            ).length
                        }
                    </Text>

                    <Text style={styles.statLabel}>
                        Active
                    </Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>
                        {
                            interns.filter(
                                i =>
                                    i.status ===
                                    'Completed',
                            ).length
                        }
                    </Text>

                    <Text style={styles.statLabel}>
                        Completed
                    </Text>
                </View>

            </View>

            {/* Search */}

            <SearchBar
                value={search}
                onChangeText={setSearch}
                placeholder="Search Intern..."
            />

            {/* Filters */}

            <FlatList
                data={filters}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.filterContainer}
                renderItem={({ item }) => (
                    <FilterChip
                        title={item}
                        selected={selectedFilter === item}
                        onPress={() => setSelectedFilter(item)}
                    />
                )}
            />

            {/* Intern List */}

            <FlatList
                data={filteredInterns}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}

                initialNumToRender={6}
                maxToRenderPerBatch={5}
                windowSize={10}
                removeClippedSubviews={true}

                ListEmptyComponent={
                    <EmptyState
                        title="No Intern Found"
                    />
                }

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[Colors.primary]}
                    />
                }

                contentContainerStyle={styles.listContainer}
            />

        </View>
    );
};

export default InternDirectoryScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    header: {
        backgroundColor: Colors.primary,

        paddingTop: Spacing.xxxl,
        paddingBottom: Spacing.xxl,
        paddingHorizontal: Spacing.xl,

        borderBottomLeftRadius: Radius.xxl,
        borderBottomRightRadius: Radius.xxl,
    },

    welcome: {
        color: Colors.white,
        fontSize: FontSize.md,
    },

    heading: {
        marginTop: Spacing.xs,

        color: Colors.white,

        fontSize: FontSize.xxl,

        fontWeight: FontWeight.bold,
    },

    subHeading: {
        marginTop: Spacing.xs,

        color: Colors.white,

        opacity: 0.85,

        fontSize: FontSize.sm,
    },

    statsContainer: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginHorizontal: Spacing.lg,

        marginTop: -22,

        marginBottom: Spacing.lg,
    },

    statCard: {
        flex: 1,

        backgroundColor: Colors.surface,

        marginHorizontal: 4,

        borderRadius: Radius.xl,

        paddingVertical: Spacing.lg,

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
        color: Colors.primary,

        fontSize: FontSize.xl,

        fontWeight: FontWeight.bold,
    },

    statLabel: {
        marginTop: Spacing.xs,

        color: Colors.textSecondary,

        fontSize: FontSize.sm,
    },

    filterContainer: {
        paddingHorizontal: Spacing.lg,

        paddingBottom: Spacing.md,
    },

    listContainer: {
        paddingBottom: 30,
    },

});