import React from 'react';

import { View, Text } from 'react-native';

import ThemeToggle from '@/components/ThemeToggle';
import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

type Props = {
    title: string;
    icon?: React.ReactNode;
};

const Header: React.FC<Props> = ({ title, icon }) => {
    const colors = useThemeColors();

    return (
        <View style={styles.container}>
            <View style={styles.leftGroup}>
                {icon && <View style={styles.iconWrapper}>{icon}</View>}
                <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            </View>

            <ThemeToggle />
        </View>
    );
};

export default Header;
