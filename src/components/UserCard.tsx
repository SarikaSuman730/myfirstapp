import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    Colors,
    FontSize,
    FontWeight,
    Spacing,
    Radius,
} from '../theme';

interface UserCardProps {
    item: any;
}

const UserCard = ({ item }: UserCardProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}>

            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {item.name.charAt(0).toUpperCase()}
                </Text>

                <View style={styles.online} />
            </View>

            <View style={styles.info}>

                <View style={styles.topRow}>

                    <Text
                        numberOfLines={1}
                        style={styles.name}>
                        {item.name}
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            Active
                        </Text>
                    </View>

                </View>

                <View style={styles.row}>
                    <Icon
                        name="mail-outline"
                        size={16}
                        color={Colors.textSecondary}
                    />

                    <Text
                        numberOfLines={1}
                        style={styles.value}>
                        {item.email}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Icon
                        name="call-outline"
                        size={16}
                        color={Colors.textSecondary}
                    />

                    <Text style={styles.value}>
                        {item.phone}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Icon
                        name="business-outline"
                        size={16}
                        color={Colors.textSecondary}
                    />

                    <Text
                        numberOfLines={1}
                        style={styles.value}>
                        {item.company.name}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Icon
                        name="globe-outline"
                        size={16}
                        color={Colors.textSecondary}
                    />

                    <Text
                        numberOfLines={1}
                        style={styles.value}>
                        {item.website}
                    </Text>
                </View>

            </View>

        </TouchableOpacity>
    );
};

export default UserCard;

const styles = StyleSheet.create({

    card: {
        backgroundColor: Colors.surface,

        marginHorizontal: Spacing.lg,
        marginVertical: Spacing.sm,

        borderRadius: Radius.xxl,

        padding: Spacing.lg,

        flexDirection: 'row',

        elevation: 8,

        shadowColor: Colors.shadow,
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: Radius.round,

        backgroundColor: Colors.secondary,

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: Spacing.lg,
    },

    avatarText: {
        color: Colors.white,
        fontSize: FontSize.xxl,
        fontWeight: FontWeight.bold,
    },

    online: {
        width: 14,
        height: 14,
        borderRadius: 7,

        backgroundColor: Colors.success,

        position: 'absolute',
        bottom: 5,
        right: 5,

        borderWidth: 2,
        borderColor: Colors.white,
    },

    info: {
        flex: 1,
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    name: {
        flex: 1,
        marginRight: Spacing.sm,

        color: Colors.textPrimary,
        fontSize: FontSize.lg,
        fontWeight: FontWeight.bold,
    },

    badge: {
        backgroundColor: '#DCFCE7',

        paddingHorizontal: Spacing.sm,
        paddingVertical: 4,

        borderRadius: Radius.round,
    },

    badgeText: {
        color: '#15803D',
        fontSize: FontSize.sm,
        fontWeight: FontWeight.bold,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',

        marginTop: Spacing.sm,
    },

    value: {
        flex: 1,

        marginLeft: Spacing.sm,

        color: Colors.textSecondary,
        fontSize: FontSize.md,
    },

});

