import React from 'react';

import { FlatList, ListRenderItem, Text } from 'react-native';

import { router } from 'expo-router';

import UserCard from '@/components/UserCard';
import colors from '@/constants/colors';
import { spacing } from '@/constants/layout';
import { fontSizes } from '@/constants/typography';

export type UserItem = {
    id: number;
    name: string;
    flag?: string;
    subtitle: string;
    imageUrl: string;
    online?: boolean;
};

type Props = {
    users: UserItem[];
};

const UsersList: React.FC<Props> = ({ users }) => {
    const openChat = (userId: number) => () => {
        router.push({
            pathname: '/chat/[userId]',
            params: { userId: String(userId) }, // краще явно в строку
        });
    };

    const renderItem: ListRenderItem<UserItem> = ({ item }) => (
        <UserCard
            name={item.name}
            flag={item.flag}
            subtitle={item.subtitle}
            imageUrl={item.imageUrl}
            online={item.online}
            onChat={openChat(item.id)}
        />
    );

    return (
        <>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 16 }}
            />

            <Text
                style={{
                    textAlign: 'center',
                    marginTop: spacing.lg,
                    fontSize: fontSizes.sm,
                    color: colors.subtext,
                }}
            >
                Scroll to see more partners
            </Text>
        </>
    );
};

export default UsersList;
