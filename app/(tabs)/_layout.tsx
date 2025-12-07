import React from 'react';

import { Platform, UIManager } from 'react-native';

import { Tabs } from 'expo-router';

import BottomNavigation from '@/components/BottomNavigation';
import { TABS } from '@/constants/tabs';
import { useThemeColors } from '@/hooks/useThemeColors';
import { createTabsScreenOptions } from '@/services/navigation/options';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TabsLayout: React.FC = () => {
    const colors = useThemeColors();

    return (
        <Tabs
            tabBar={props => <BottomNavigation {...props} />}
            screenOptions={createTabsScreenOptions(colors)}
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
