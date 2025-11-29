import React from 'react';

import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import UsersList, { UserItem } from '@/components/UserList';
import colors from '@/constants/colors';

const chats: UserItem[] = [
    {
        id: 1,
        name: 'Sofia M.',
        flag: '🇵🇱',
        subtitle: 'How are you today?',
        imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        online: true,
    },
    {
        id: 2,
        name: 'John Doe',
        flag: '🇺🇸',
        subtitle: "Sure — let's practice tonight!",
        imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        online: false,
    },
    {
        id: 3,
        name: 'Emilia R.',
        flag: '🇩🇪',
        subtitle: 'Thanks for your help yesterday 😊',
        imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
        online: true,
    },
];

const ChatListScreen: React.FC = () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <Header
            title="Chat"
            icon={<Text style={{ fontSize: 16, color: colors.primary }}>💬</Text>}
        />

        <UsersList users={chats} />
    </SafeAreaView>
);

export default ChatListScreen;
