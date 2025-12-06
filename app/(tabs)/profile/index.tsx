import React from 'react';

import { ScrollView, View, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import { radius, spacing } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';
import { useThemeColors } from '@/hooks/useThemeColors';

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

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    content: {},
    headerIcon: {
        fontSize: fontSizes.md,
    },

    card: {
        borderRadius: radius.lg,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.lg,
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.sm,
    },
    avatarInitial: {
        fontSize: 40,
        fontWeight: fontWeights.bold,
    },
    name: {
        textAlign: 'center',
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
        marginTop: spacing.xs,
    },
    status: {
        textAlign: 'center',
        fontSize: fontSizes.sm,
        marginTop: 2,
        marginBottom: spacing.lg,
    },

    infoBlock: {
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginBottom: spacing.sm,
    },
    infoLabel: {
        fontSize: fontSizes.xs,
        marginBottom: 2,
    },
    infoValue: {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },

    statsBlock: {
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginTop: spacing.sm,
        marginBottom: spacing.lg,
    },
    statItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    statLabel: {
        fontSize: fontSizes.xs,
    },
    statValue: {
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.semibold,
    },

    accountSection: {
        marginTop: spacing.sm,
    },
    accountTitle: {
        fontSize: fontSizes.xs,
        marginBottom: spacing.xs,
    },
    accountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginTop: spacing.xs,
    },
    accountIcon: {
        fontSize: fontSizes.md,
        marginRight: spacing.sm,
    },
    accountLabel: {
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.medium,
    },
});

export default ProfileScreen;
