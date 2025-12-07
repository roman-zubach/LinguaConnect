import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatBubble from '@/components/ChatBubble';
import { radius, spacing } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';
import { useChat } from '@/hooks/useChat';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ChatRouteParams } from '@/services/navigation/type';

const ChatScreen: React.FC = () => {
    const { chatId } = useLocalSearchParams<ChatRouteParams>();
    const colors = useThemeColors();

    const { user, messages, loading, loadingMore, hasMore, loadMore, sendMessage } =
        useChat(chatId);

    const [inputValue, setInputValue] = useState('');

    const handleSend = async () => {
        if (!inputValue.trim()) return;
        await sendMessage(inputValue.trim());
        setInputValue('');
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView
            style={[styles.safeArea, { backgroundColor: colors.background }]}
            edges={['top', 'left', 'right', 'bottom']}
        >
            <KeyboardAvoidingView
                style={[styles.container, { backgroundColor: colors.background }]}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                <View style={[styles.headerCard, { backgroundColor: colors.surface }]}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => router.back()}
                            activeOpacity={0.8}
                        >
                            <Text style={[styles.backIcon, { color: colors.text }]}>‹</Text>
                        </TouchableOpacity>

                        <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.avatarInitial, { color: colors.background }]}>
                                {user?.name.charAt(0) ?? '?'}
                            </Text>
                        </View>

                        <View>
                            <Text style={[styles.headerName, { color: colors.text }]}>
                                {user?.name ?? '...'}
                            </Text>

                            <View style={styles.statusRow}>
                                <Text style={[styles.statusText, { color: colors.subtext }]}>
                                    {user?.online ? 'Online' : 'Offline'}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <Text style={[styles.headerStar, { color: colors.text }]}>
                            {user?.isFavorite ? '⭐' : '☆'}
                        </Text>

                        <Text style={[styles.headerMore, { color: colors.subtext }]}>⋯</Text>
                    </View>
                </View>

                <FlatList
                    style={styles.messagesList}
                    contentContainerStyle={{ paddingVertical: spacing.md }}
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ChatBubble
                            text={item.text}
                            isOwn={item.isOwn}
                            createdAt={item.createdAt}
                        />
                    )}
                    inverted
                    onEndReached={hasMore ? loadMore : undefined}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                        loadingMore ? (
                            <ActivityIndicator size="small" color={colors.primary} />
                        ) : null
                    }
                />

                <View style={styles.inputBarWrapper}>
                    <View style={[styles.inputBar, { backgroundColor: colors.surface }]}>
                        <View style={[styles.roundButton, { backgroundColor: colors.card }]}>
                            <Text style={[styles.roundButtonIcon, { color: colors.text }]}>＋</Text>
                        </View>

                        <View style={[styles.textInputWrapper, { backgroundColor: colors.card }]}>
                            <TextInput
                                value={inputValue}
                                onChangeText={setInputValue}
                                placeholder="Type a message..."
                                placeholderTextColor={colors.subtext}
                                style={[styles.textInput, { color: colors.text }]}
                                multiline
                            />
                        </View>

                        <TouchableOpacity
                            style={[styles.iconButton, { backgroundColor: colors.card }]}
                        >
                            <Text style={[styles.iconButtonIcon, { color: colors.text }]}>🎙️</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.sendButtonWrapper, { backgroundColor: colors.primary }]}
                            onPress={handleSend}
                        >
                            <Text style={[styles.sendButton, { color: colors.background }]}>
                                Send
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    container: {
        flex: 1,
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerCard: {
        marginHorizontal: spacing.md,
        marginTop: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: radius.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    backButton: {
        marginRight: spacing.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backIcon: {
        fontSize: 22,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },

    avatarInitial: {
        fontWeight: fontWeights.semibold,
        fontSize: fontSizes.md,
    },

    headerName: {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },

    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },

    statusText: {
        fontSize: fontSizes.xs,
    },

    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },

    headerStar: {
        fontSize: 18,
    },

    headerMore: {
        fontSize: 18,
    },

    messagesList: {
        flex: 1,
        paddingHorizontal: spacing.md,
    },

    inputBarWrapper: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
        paddingTop: spacing.sm,
    },

    inputBar: {
        borderRadius: radius.lg,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
    },

    roundButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },

    roundButtonIcon: {
        fontSize: fontSizes.md,
    },

    textInputWrapper: {
        flex: 1,
        borderRadius: radius.md,
        paddingHorizontal: spacing.sm,
        paddingVertical: 6,
        marginRight: spacing.sm,
    },

    textInput: {
        fontSize: fontSizes.sm,
        maxHeight: 80,
    },

    iconButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },

    iconButtonIcon: {
        fontSize: fontSizes.md,
    },

    sendButtonWrapper: {
        borderRadius: radius.md,
        paddingHorizontal: spacing.lg,
        paddingVertical: 8,
    },

    sendButton: {
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.semibold,
        textAlign: 'center',
    },
});

export default ChatScreen;
