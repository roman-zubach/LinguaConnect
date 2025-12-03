import React from 'react';

import { Text, ActivityIndicator, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import InputField from '@/components/InputField';
import UsersList from '@/components/UserList';
import { usePaginatedUsers } from '@/hooks/usePaginatedUsers';
import { useThemeColors } from '@/hooks/useThemeColors';

type SearchFavoritesValue = {
    query: string;
};

const FavoritesScreen = () => {
    const colors = useThemeColors();

    const [filtersState, setFiltersState] = React.useState<SearchFavoritesValue>({
        query: '',
    });

    const learningLanguage = filtersState.query.trim() || undefined;

    const { users, loading, loadingMore, hasMore, loadMore } = usePaginatedUsers({
        scope: 'favorites',
        filters: {
            learningLanguage,
        },
        onlyFavorite: true,
        pageSize: 10,
    });

    const handleQueryChange = (query: string) => {
        setFiltersState({ query });
    };

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

export default FavoritesScreen;
