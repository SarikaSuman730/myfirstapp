import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UsersScreen from '../screens/UsersScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: ({ color, size }) => {
                    let iconName = '';

                    if (route.name === 'Home')
                        iconName = 'home';

                    else if (route.name === 'Profile')
                        iconName = 'person';

                    else if (route.name === 'Users')
                        iconName = 'people';

                    else if (route.name === 'Settings')
                        iconName = 'settings';

                    return (
                        <Icon
                            name={iconName}
                            size={24}
                            color={color}
                        />
                    );
                },

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    right: 15,
                    height: 70,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    elevation: 10,
                },

                tabBarActiveTintColor: '#7B2FF7',
                tabBarInactiveTintColor: '#999',

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
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