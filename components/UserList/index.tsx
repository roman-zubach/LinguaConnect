import React, { useCallback, memo } from 'react';

import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';

import { router } from 'expo-router';

import UserCard from '@/components/UserCard';
import { spacing } from '@/constants/layout';
import { ChatRouteParams } from '@/services/navigation/type';
import { UserItem } from '@/services/user/type';

type Props = {
    users: UserItem[];
    loadMore?: () => void;
    loadingMore?: boolean;
};

const UsersListComponent: React.FC<Props> = ({ users, loadMore, loadingMore = false }) => {
    const handleChatPress = useCallback((chatId: string) => {
        const params: ChatRouteParams = { chatId };

        router.push({
            pathname: '/chat/[chatId]',
            params,
        });
    }, []);

    const renderItem: ListRenderItem<UserItem> = useCallback(
        ({ item }) => (
            <UserCard
                name={item.name}
                flag={item.flag}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                online={item.online}
                nativeLanguage={item.nativeLanguage}
                learningLanguage={item.learningLanguage}
                chatId={item.chatId}
                onChat={handleChatPress}
            />
        ),
        [handleChatPress],
    );

    const keyExtractor = useCallback((item: UserItem) => item.id, []);

    return (
        <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loadingMore ? <ActivityIndicator size="small" /> : null}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: spacing.sm }}
        />
    );
};

const UsersList = memo(UsersListComponent);

export default UsersList;
