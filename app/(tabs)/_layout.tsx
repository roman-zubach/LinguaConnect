import React from 'react';

import { Tabs } from 'expo-router';

import BottomNavigation from '@/components/BottomNavigation';
import { TABS } from '@/constants/tabs';

const TabsLayout: React.FC = () => (
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

export default TabsLayout;
