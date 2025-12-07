import { ViewStyle } from 'react-native';

import type { ThemeColors } from '@/hooks/useThemeColors';

import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const createStackScreenOptions = (colors: ThemeColors) => ({
    headerShown: false,
    contentStyle: {
        backgroundColor: colors.background,
    },
});

export const createTabsScreenOptions = (colors: ThemeColors): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarStyle: {
        backgroundColor: colors.card,
        position: 'absolute',
    } as ViewStyle,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.subtext,
});
