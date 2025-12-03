import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { fontSizes } from '@/constants/typography';
import { useAppTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColors';

const ThemeToggle = () => {
    const { resolvedTheme, toggleTheme } = useAppTheme();
    const colors = useThemeColors();

    return (
        <TouchableOpacity onPress={toggleTheme} accessibilityRole="button" activeOpacity={0.7}>
            <Text
                style={{
                    fontSize: fontSizes.lg,
                    color: colors.text,
                }}
            >
                {resolvedTheme === 'dark' ? '☀️' : '🌙'}
            </Text>
        </TouchableOpacity>
    );
};

export default ThemeToggle;
