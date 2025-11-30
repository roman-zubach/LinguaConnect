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
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatBubble from '@/components/ChatBubble';
import colors from '@/constants/colors';
import { spacing } from '@/constants/layout';
import { useChat } from '@/hooks/useChat';

import { styles } from './styles';

const ChatScreen: React.FC = () => {
    const { chatId } = useLocalSearchParams<{ chatId: string }>();

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
            <SafeAreaView style={styles.safeArea}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                <View style={styles.headerCard}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => router.back()}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.backIcon}>‹</Text>
                        </TouchableOpacity>

                        <View style={styles.avatar}>
                            <Text style={styles.avatarInitial}>{user?.name.charAt(0) ?? '?'}</Text>
                        </View>

                        <View>
                            <Text style={styles.headerName}>{user?.name ?? '...'}</Text>

                            <View style={styles.statusRow}>
                                <Text style={styles.statusText}>
                                    {user?.online ? 'Online' : 'Offline'}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <Text style={styles.headerStar}>{user?.isFavorite ? '⭐' : '☆'}</Text>
                        <Text style={styles.headerMore}>⋯</Text>
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
                    <View style={styles.inputBar}>
                        <View style={styles.roundButton}>
                            <Text style={styles.roundButtonIcon}>＋</Text>
                        </View>

                        <View style={styles.textInputWrapper}>
                            <TextInput
                                value={inputValue}
                                onChangeText={setInputValue}
                                placeholder="Type a message..."
                                placeholderTextColor={colors.subtext}
                                style={styles.textInput}
                                multiline
                            />
                        </View>

                        <TouchableOpacity style={styles.iconButton}>
                            <Text style={styles.iconButtonIcon}>🎙️</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.sendButtonWrapper} onPress={handleSend}>
                            <Text style={styles.sendButton}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;
