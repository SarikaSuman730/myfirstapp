import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient
                colors={['#7B2FF7', '#9D4EDD']}
                style={styles.header}>

                <Image
                    source={{
                        uri: 'https://i.pravatar.cc/300',
                    }}
                    style={styles.avatar}
                />

                <Text style={styles.name}>Sarika Suman</Text>

                <Text style={styles.role}>
                    React Native Intern
                </Text>

                <Text style={styles.email}>
                    sarika.suma8@gmail.com
                </Text>
            </LinearGradient>

            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Text style={styles.number}>20</Text>
                    <Text style={styles.label}>Completed</Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.number}>5</Text>
                    <Text style={styles.label}>Projects</Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.number}>2</Text>
                    <Text style={styles.label}>APIs</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>About Me</Text>

                <Text style={styles.detail}>
                    Passionate React Native Intern interested in
                    Mobile App Development, API Integration,
                    UI Design and Cyber Security.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Skills</Text>

                <View style={styles.skillsRow}>
                    <View style={styles.skill}>
                        <Text>React Native</Text>
                    </View>

                    <View style={styles.skill}>
                        <Text>TypeScript</Text>
                    </View>

                    <View style={styles.skill}>
                        <Text>API Integration</Text>
                    </View>

                    <View style={styles.skill}>
                        <Text>UI Design</Text>
                    </View>

                    <View style={styles.skill}>
                        <Text>GitHub</Text>
                    </View>

                    <View style={styles.skill}>
                        <Text>JavaScript</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Internship Details
                </Text>

                <Text style={styles.detail}>
                    Company: Antigravity
                </Text>

                <Text style={styles.detail}>
                    Role: React Native Intern
                </Text>

                <Text style={styles.detail}>
                    Duration: 2 Months
                </Text>

                <Text style={styles.detail}>
                    Status: Active
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Achievements
                </Text>

                <Text style={styles.detail}>
                    🏆 Completed React Native Internship Tasks
                </Text>

                <Text style={styles.detail}>
                    🚀 Integrated Public APIs
                </Text>

                <Text style={styles.detail}>
                    📱 Built Responsive Mobile UI
                </Text>

                <Text style={styles.detail}>
                    🎯 Implemented Navigation & Validation
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Contact
                </Text>

                <Text style={styles.detail}>
                    📧 sarika.suman8@gmail.com
                </Text>

                <Text style={styles.detail}>
                    📍 India
                </Text>
            </View>

            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialBtn}>
                    <Text style={styles.socialText}>
                        GitHub
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialBtn}>
                    <Text style={styles.socialText}>
                        LinkedIn
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="person-outline" size={22} />
                    <Text style={styles.menuText}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="briefcase-outline" size={22} />
                    <Text style={styles.menuText}>
                        Internship Details
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="folder-outline" size={22} />
                    <Text style={styles.menuText}>Projects</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Icon name="settings-outline" size={22} />
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>
                    Logout
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FB',
    },

    header: {
        alignItems: 'center',
        paddingVertical: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#fff',
    },

    name: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
    },

    role: {
        color: '#EAEAEA',
        marginTop: 5,
    },

    email: {
        color: '#EAEAEA',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: -30,
    },

    statCard: {
        backgroundColor: '#fff',
        width: 100,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 5,
    },

    number: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7B2FF7',
    },

    label: {
        color: '#666',
    },

    card: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 18,
        borderRadius: 20,
        elevation: 4,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    skillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    skill: {
        backgroundColor: '#EFE7FF',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        margin: 5,
    },

    detail: {
        marginBottom: 10,
        color: '#444',
    },

    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
    },

    socialBtn: {
        backgroundColor: '#7B2FF7',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 25,
        marginBottom: 15,
    },

    socialText: {
        color: '#fff',
        fontWeight: '600',
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },

    menuText: {
        marginLeft: 15,
        fontSize: 16,
    },

    logoutButton: {
        backgroundColor: '#7B2FF7',
        margin: 20,
        padding: 16,
        borderRadius: 30,
    },

    logoutText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});