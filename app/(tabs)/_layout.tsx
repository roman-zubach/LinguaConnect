import React from 'react';

import { Platform, UIManager } from 'react-native';

import { Tabs } from 'expo-router';

import BottomNavigation from '@/components/BottomNavigation';
import { TABS } from '@/constants/tabs';

const TabsLayout: React.FC = () => {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    return (
        <Tabs
            tabBar={props => <BottomNavigation {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                },
            }}
        >
            {TABS.map(tab => (
                <Tabs.Screen
                    key={tab.id}
                    name={tab.path}
                    options={{
                        title: tab.label,
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabsLayout;
