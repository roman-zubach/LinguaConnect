import React from 'react';

import { ScrollView, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

const accountItems = [
    { id: 'notifications', icon: '🔔', label: 'Notifications' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'edit', icon: '✏️', label: 'Edit Profile' },
    { id: 'logout', icon: '📕', label: 'Log Out', isDanger: true },
];

const ProfileScreen: React.FC = () => {
    const colors = useThemeColors();

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Header
                    title="Profile"
                    icon={<Text style={[styles.headerIcon, { color: colors.primary }]}>👤</Text>}
                />

                <View style={[styles.card, { backgroundColor: colors.surface }]}>
                    <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                        <Text style={[styles.avatarInitial, { color: colors.background }]}>J</Text>
                    </View>

                    <Text style={[styles.name, { color: colors.text }]}>John Miller</Text>

                    <Text style={[styles.status, { color: colors.accent }]}>Online</Text>

                    <View style={[styles.infoBlock, { backgroundColor: colors.card }]}>
                        <Text style={[styles.infoLabel, { color: colors.subtext }]}>Fluent in</Text>

                        <Text style={[styles.infoValue, { color: colors.text }]}>English 🇬🇧</Text>
                    </View>

                    <View style={[styles.infoBlock, { backgroundColor: colors.card }]}>
                        <Text style={[styles.infoLabel, { color: colors.subtext }]}>Learning</Text>

                        <Text style={[styles.infoValue, { color: colors.text }]}>Spanish 🇪🇸</Text>
                    </View>

                    <View style={[styles.statsBlock, { backgroundColor: colors.card }]}>
                        <View style={styles.statItem}>
                            <Text style={[styles.statLabel, { color: colors.subtext }]}>
                                Total Chats
                            </Text>

                            <Text style={[styles.statValue, { color: colors.text }]}>24</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Text style={[styles.statLabel, { color: colors.subtext }]}>
                                Favorite Partners
                            </Text>

                            <Text style={[styles.statValue, { color: colors.text }]}>6</Text>
                        </View>
                    </View>

                    <View style={styles.accountSection}>
                        <Text style={[styles.accountTitle, { color: colors.subtext }]}>
                            Account
                        </Text>

                        {accountItems.map(item => (
                            <View
                                key={item.id}
                                style={[styles.accountRow, { backgroundColor: colors.card }]}
                            >
                                <Text style={styles.accountIcon}>{item.icon}</Text>
                                <Text
                                    style={[
                                        styles.accountLabel,
                                        { color: item.isDanger ? colors.danger : colors.text },
                                    ]}
                                >
                                    {item.label}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
