import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatBubble from '@/components/ChatBubble';
import colors from '@/constants/colors';
import { spacing } from '@/constants/layout';

import { styles } from './styles';

type Message = {
    id: string;
    text: string;
    isOwn: boolean;
};

const initialMessages: Message[] = [
    { id: '1', text: 'How are you today?', isOwn: false },
    { id: '2', text: "Sure! Let's do 15m text + 5m voice.", isOwn: true },
    { id: '3', text: 'Great — I’ll start with a question.', isOwn: false },
];

const ChatScreen: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([...initialMessages].reverse());
    const [inputValue, setInputValue] = useState('');

    const { userId } = useLocalSearchParams<{ userId: string }>();

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages(prev => [
            { id: String(prev.length + 1), text: inputValue.trim(), isOwn: true },
            ...prev,
        ]);
        setInputValue('');
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                {/* HEADER CARD */}
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
                            <Text style={styles.avatarInitial}>S</Text>
                        </View>

                        <View>
                            <Text style={styles.headerName}>Sofia M.</Text>
                            <View style={styles.statusRow}>
                                <View style={styles.statusDot} />
                                <Text style={styles.statusText}>Online</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <Text style={styles.headerStar}>⭐</Text>
                        <Text style={styles.headerMore}>⋯</Text>
                    </View>
                </View>

                <FlatList
                    style={styles.messagesList}
                    contentContainerStyle={{ paddingVertical: spacing.md }}
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ChatBubble text={item.text} isOwn={item.isOwn} />}
                    inverted
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

                        <View style={styles.iconButton}>
                            <Text style={styles.iconButtonIcon}>🎙️</Text>
                        </View>

                        <View style={styles.sendButtonWrapper}>
                            <Text style={styles.sendButton} onPress={handleSend} numberOfLines={1}>
                                Send
                            </Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;
