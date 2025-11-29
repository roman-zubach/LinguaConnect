import React from 'react';

import { ScrollView, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';

import { styles } from './styles';

const accountItems = [
    { id: 'notifications', icon: '🔔', label: 'Notifications' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'edit', icon: '✏️', label: 'Edit Profile' },
    { id: 'logout', icon: '📕', label: 'Log Out', isDanger: true },
];

const ProfileScreen: React.FC = () => (
    <SafeAreaView style={styles.safe}>
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <Header title="Profile" icon={<Text style={styles.headerIcon}>👤</Text>} />

            <View style={styles.card}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarInitial}>J</Text>
                </View>

                <Text style={styles.name}>John Miller</Text>
                <Text style={styles.status}>Online</Text>

                <View style={styles.infoBlock}>
                    <Text style={styles.infoLabel}>Fluent in</Text>
                    <Text style={styles.infoValue}>English 🇬🇧</Text>
                </View>

                <View style={styles.infoBlock}>
                    <Text style={styles.infoLabel}>Learning</Text>
                    <Text style={styles.infoValue}>Spanish 🇪🇸</Text>
                </View>

                <View style={styles.statsBlock}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Total Chats</Text>
                        <Text style={styles.statValue}>24</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Favorite Partners</Text>
                        <Text style={styles.statValue}>6</Text>
                    </View>
                </View>

                <View style={styles.accountSection}>
                    <Text style={styles.accountTitle}>Account</Text>

                    {accountItems.map(item => (
                        <View key={item.id} style={styles.accountRow}>
                            <Text style={styles.accountIcon}>{item.icon}</Text>
                            <Text
                                style={[
                                    styles.accountLabel,
                                    item.isDanger && styles.accountLabelDanger,
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

export default ProfileScreen;
