import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UsersScreen from '../screens/UsersScreen';
import InternDirectoryScreen from '../screens/InternDirectoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

import {
    Colors,
    FontSize,
    FontWeight,
    Radius,
} from '../theme';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarHideOnKeyboard: true,

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    right: 15,

                    height: 75,

                    paddingTop: 8,
                    paddingBottom: 8,

                    borderRadius: Radius.xxl,

                    backgroundColor: Colors.surface,

                    borderTopWidth: 0,

                    elevation: 12,

                    shadowColor: Colors.shadow,
                    shadowOpacity: 0.12,
                    shadowRadius: 10,
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                },

                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.textSecondary,

                tabBarLabelStyle: {
                    fontSize: FontSize.sm,
                    fontWeight: FontWeight.semiBold,
                },

                tabBarIcon: ({ color, size }) => {

                    let iconName = '';

                    switch (route.name) {

                        case 'Home':
                            iconName = 'home';
                            break;

                        case 'Profile':
                            iconName = 'person';
                            break;

                        case 'Interns':
                            iconName = 'briefcase';
                            break;

                        case 'Users':
                            iconName = 'people';
                            break;

                        case 'Settings':
                            iconName = 'settings';
                            break;

                        default:
                            iconName = 'ellipse';
                    }

                    return (
                        <Icon
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />

            <Tab.Screen
                name="Interns"
                component={InternDirectoryScreen}
            />

            <Tab.Screen
                name="Users"
                component={UsersScreen}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />

        </Tab.Navigator>
    );
};

export default BottomTabs;