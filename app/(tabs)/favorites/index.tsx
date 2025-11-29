import React from 'react';

import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import InputField from '@/components/InputField';
import UsersList, { UserItem } from '@/components/UserList';
import colors from '@/constants/colors';

type SearchFavoritesValue = {
    query: string;
};

const mockUsers: UserItem[] = [
    {
        id: 1,
        name: 'John Doe',
        flag: '🇺🇸',
        subtitle: 'Fluent in English · Learning Spanish',
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        online: true,
    },
];

const FavoritesScreen = () => {
    const [filtersState, setFiltersState] = React.useState<SearchFavoritesValue>({
        query: '',
    });

    const handleQueryChange = (query: string) => setFiltersState({ query });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <Header
                title="Favorites"
                icon={<Text style={{ fontSize: 16, color: colors.primary }}>⭐</Text>}
            />

            <InputField
                placeholder="🔍 Search favorites..."
                value={filtersState.query}
                onChangeText={handleQueryChange}
            />

            <UsersList users={mockUsers} />
        </SafeAreaView>
    );
};

export default FavoritesScreen;
