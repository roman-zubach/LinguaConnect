import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { TABS } from '@/constants/tabs';
import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const BottomNavigation: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
    const colors = useThemeColors();

    return (
        <View
            style={[
                styles.nav,
                {
                    backgroundColor: colors.surface,
                    borderTopColor: colors.border,
                },
            ]}
        >
            {state.routes.map((route, index) => {
                const config = TABS.find(tab => tab.path === route.name);

                if (!config) return null;

                const isActive = state.index === index;

                const onPress = () => {
                    if (!isActive) navigation.navigate(route.name);
                };

                return (
                    <TouchableOpacity
                        key={config.id}
                        onPress={onPress}
                        activeOpacity={0.8}
                        style={styles.tab}
                    >
                        <Text
                            style={[
                                styles.icon,
                                { color: isActive ? colors.primary : colors.subtext },
                            ]}
                        >
                            {config.icon}
                        </Text>

                        <Text
                            style={[
                                styles.label,
                                { color: isActive ? colors.primary : colors.subtext },
                            ]}
                        >
                            {config.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavigation;
