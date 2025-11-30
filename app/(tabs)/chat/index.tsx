import React from 'react';

import { Text, ActivityIndicator, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import UsersList from '@/components/UserList';
import colors from '@/constants/colors';
import { usePaginatedUsers } from '@/hooks/usePaginatedUsers';

const ChatListScreen: React.FC = () => {
    const { users, loading, loadingMore, hasMore, loadMore } = usePaginatedUsers({
        pageSize: 10,
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <Header
                title="Chat"
                icon={<Text style={{ fontSize: 16, color: colors.primary }}>💬</Text>}
            />

            {loading && users.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : (
                <UsersList
                    users={users}
                    loadMore={hasMore ? loadMore : undefined}
                    loadingMore={loadingMore}
                />
            )}
        </SafeAreaView>
    );
};

export default ChatListScreen;
