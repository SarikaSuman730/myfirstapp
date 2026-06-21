import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({ navigation }: any) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!fullName || !email || !password) {
            Alert.alert(
                'Validation Error',
                'Please fill all fields',
            );
            return;
        }

        navigation.navigate('Main');
    };

    return (
        <LinearGradient
            colors={['#0F172A', '#1E3A8A', '#2563EB']}
            style={styles.container}
        >
            <Animatable.View
                animation="zoomIn"
                duration={1200}
                style={styles.logoContainer}
            >
                <Text style={styles.logo}>
                    🚀
                </Text>

                <Text style={styles.appName}>
                    MyFirstApp
                </Text>
            </Animatable.View>

            <Animatable.View
                animation="fadeInUp"
                duration={1000}
                style={styles.card}
            >
                <Text style={styles.welcome}>
                    Welcome Back 👋
                </Text>

                <Text style={styles.subtitle}>
                    Sign in to continue
                </Text>

                {/* Full Name */}

                <View style={styles.inputContainer}>
                    <Icon
                        name="person-outline"
                        size={22}
                        color="#64748B"
                    />

                    <TextInput
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                        style={styles.input}
                    />
                </View>

                {/* Email */}

                <View style={styles.inputContainer}>
                    <Icon
                        name="mail-outline"
                        size={22}
                        color="#64748B"
                    />

                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                </View>

                {/* Password */}

                <View style={styles.inputContainer}>
                    <Icon
                        name="lock-closed-outline"
                        size={22}
                        color="#64748B"
                    />

                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <Text style={styles.or}>
                    OR CONTINUE WITH
                </Text>

                <View style={styles.socialContainer}>
                    <TouchableOpacity
                        style={styles.socialButton}
                    >
                        <Text style={styles.socialText}>
                            G
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.socialButton}
                    >
                        <Text style={styles.socialText}>
                            F
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.socialButton}
                    >
                        <Text style={styles.socialText}>
                            X
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </LinearGradient>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },

    logo: {
        fontSize: 80,
    },

    appName: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '700',
        marginTop: 10,
    },

    card: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        borderRadius: 35,
        padding: 25,
        elevation: 12,
    },

    welcome: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1E3A8A',
    },

    subtitle: {
        textAlign: 'center',
        color: '#64748B',
        marginBottom: 25,
        marginTop: 5,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
    },

    input: {
        flex: 1,
        height: 55,
        marginLeft: 10,
    },

    forgot: {
        textAlign: 'right',
        color: '#2563EB',
        marginBottom: 20,
        fontWeight: '600',
    },

    button: {
        backgroundColor: '#1E3A8A',
        paddingVertical: 16,
        borderRadius: 30,
        elevation: 5,
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
    },

    or: {
        textAlign: 'center',
        marginVertical: 20,
        color: '#94A3B8',
        fontWeight: '600',
    },

    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    socialButton: {
        width: 55,
        height: 55,
        borderRadius: 15,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },

    socialText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E3A8A',
    },
});