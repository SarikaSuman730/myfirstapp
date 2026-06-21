import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] =
        useState(true);

    return (
        <ScrollView style={styles.container}>
            <LinearGradient
                colors={['#7B2FF7', '#9D4EDD']}
                style={styles.header}
            >
                <Icon
                    name="settings"
                    size={60}
                    color="#fff"
                />

                <Text style={styles.title}>
                    Settings
                </Text>

                <Text style={styles.subtitle}>
                    Customize your experience
                </Text>
            </LinearGradient>

            <View style={styles.card}>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <Icon
                            name="moon-outline"
                            size={22}
                            color="#7B2FF7"
                        />

                        <Text style={styles.text}>
                            Dark Mode
                        </Text>
                    </View>

                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                    />
                </View>

                <View style={styles.row}>
                    <View style={styles.left}>
                        <Icon
                            name="notifications-outline"
                            size={22}
                            color="#7B2FF7"
                        />

                        <Text style={styles.text}>
                            Notifications
                        </Text>
                    </View>

                    <Switch
                        value={notifications}
                        onValueChange={setNotifications}
                    />
                </View>
            </View>

            <View style={styles.card}>
                <TouchableOpacity style={styles.menuItem}>
                    <Icon
                        name="person-outline"
                        size={22}
                        color="#7B2FF7"
                    />

                    <Text style={styles.menuText}>
                        Account
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Icon
                        name="shield-checkmark-outline"
                        size={22}
                        color="#7B2FF7"
                    />

                    <Text style={styles.menuText}>
                        Privacy
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Icon
                        name="help-circle-outline"
                        size={22}
                        color="#7B2FF7"
                    />

                    <Text style={styles.menuText}>
                        Help & Support
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Icon
                        name="information-circle-outline"
                        size={22}
                        color="#7B2FF7"
                    />

                    <Text style={styles.menuText}>
                        About App
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logout}>
                <Text style={styles.logoutText}>
                    Logout
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SettingsScreen;

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

    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
        marginTop: 10,
    },

    subtitle: {
        color: '#EAEAEA',
        marginTop: 5,
    },

    card: {
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 20,
        padding: 15,
        elevation: 4,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        marginLeft: 12,
        fontSize: 16,
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },

    menuText: {
        marginLeft: 12,
        fontSize: 16,
    },

    logout: {
        backgroundColor: '#7B2FF7',
        margin: 20,
        padding: 16,
        borderRadius: 30,
    },

    logoutText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
    },
});