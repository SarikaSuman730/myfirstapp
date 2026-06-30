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
    Radius,
    Spacing,
} from '../theme';

import StatusBadge from './StatusBadge';
import { Intern } from '../types/intern';

interface Props {
    intern: Intern;
}

const InternCard = ({ intern }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}>

            {/* Avatar */}

            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {intern.avatar}
                </Text>
            </View>

            {/* Details */}

            <View style={styles.info}>

                <View style={styles.topRow}>

                    <Text
                        numberOfLines={1}
                        style={styles.name}>
                        {intern.name}
                    </Text>

                    <StatusBadge
                        status={intern.status}
                    />

                </View>

                <Text style={styles.department}>
                    {intern.department}
                </Text>

                <View style={styles.row}>
                    <Icon
                        name="school-outline"
                        size={16}
                        color={Colors.textSecondary}
                    />

                    <Text
                        numberOfLines={1}
                        style={styles.value}>
                        {intern.college}
                    </Text>
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
                        {intern.email}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Icon
                        name="call-outline"
                        size={16}
                        color={Colors.textSecondary}
                    />

                    <Text style={styles.value}>
                        {intern.phone}
                    </Text>
                </View>

                <Text style={styles.progressText}>
                    Progress {intern.progress}%
                </Text>

                <View style={styles.progressBackground}>
                    <View
                        style={[
                            styles.progressFill,
                            {
                                width: `${intern.progress}%`,
                            },
                        ]}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        View Profile
                    </Text>
                </TouchableOpacity>

            </View>

        </TouchableOpacity>
    );
};

export default InternCard;

const styles = StyleSheet.create({

    card: {
        flexDirection: 'row',

        backgroundColor: Colors.surface,

        marginHorizontal: Spacing.lg,
        marginVertical: Spacing.sm,

        padding: Spacing.lg,

        borderRadius: Radius.xxl,

        elevation: 6,

        shadowColor: Colors.shadow,
        shadowOpacity: 0.08,
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

        backgroundColor: Colors.primary,

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: Spacing.lg,
    },

    avatarText: {
        color: Colors.white,

        fontSize: FontSize.xxl,

        fontWeight: FontWeight.bold,
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

    department: {
        marginTop: Spacing.xs,

        color: Colors.primary,

        fontSize: FontSize.md,

        fontWeight: FontWeight.semiBold,
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

    progressText: {
        marginTop: Spacing.md,

        color: Colors.textPrimary,

        fontSize: FontSize.sm,

        fontWeight: FontWeight.semiBold,
    },

    progressBackground: {
        marginTop: Spacing.xs,

        height: 8,

        backgroundColor: '#E5E7EB',

        borderRadius: Radius.round,

        overflow: 'hidden',
    },

    progressFill: {
        height: '100%',

        backgroundColor: Colors.success,

        borderRadius: Radius.round,
    },

    button: {
        marginTop: Spacing.lg,

        backgroundColor: Colors.primary,

        paddingVertical: Spacing.sm,

        borderRadius: Radius.lg,

        alignItems: 'center',
    },

    buttonText: {
        color: Colors.white,

        fontSize: FontSize.md,

        fontWeight: FontWeight.bold,
    },

});