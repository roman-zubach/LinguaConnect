import React from 'react';

import { View, Text } from 'react-native';

import ThemeToggle from '@/components/ThemeToggle';
import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

type Props = {
    username: string;
    avatarLetter: string;
};

const GreetingCard: React.FC<Props> = ({ username, avatarLetter }) => {
    const colors = useThemeColors();

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <View>
                    <Text style={[styles.title, { color: colors.text }]}>👋 Hi, {username}!</Text>

                    <Text style={[styles.subtitle, { color: colors.subtext }]}>
                        Ready to practice today?
                    </Text>
                </View>

                <View style={styles.rightGroup}>
                    <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                        <Text style={[styles.avatarText, { color: colors.background }]}>
                            {avatarLetter}
                        </Text>
                    </View>

                    <ThemeToggle />
                </View>
            </View>
        </View>
    );
};

export default GreetingCard;
