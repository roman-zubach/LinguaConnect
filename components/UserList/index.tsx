import React from 'react';

import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';

import { router } from 'expo-router';

import UserCard from '@/components/UserCard';
import { spacing } from '@/constants/layout';
import { UserItem } from '@/services/user/type';

type Props = {
    users: UserItem[];
    loadMore?: () => void;
    loadingMore?: boolean;
    showFooter?: boolean;
};

const UsersList: React.FC<Props> = ({ users, loadMore, loadingMore = false }) => {
    const openChat = (chatId: string) => () => {
        router.push({
            pathname: '/chat/[chatId]',
            params: { chatId },
        });
    };

    const renderItem: ListRenderItem<UserItem> = ({ item }) => (
        <UserCard
            name={item.name}
            flag={item.flag}
            subtitle={item.subtitle}
            imageUrl={item.imageUrl}
            online={item.online}
            onChat={openChat(item.chatId)}
        />
    );

    return (
        <>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loadingMore ? <ActivityIndicator size="small" /> : null}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: spacing.sm }}
            />
        </>
    );
};

export default UsersList;
