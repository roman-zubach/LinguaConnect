import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import GreetingCard from '@/components/GreetingCard';
import UsersList from '@/components/UserList';
import colors from '@/constants/colors';
import { usePaginatedUsers } from '@/hooks/usePaginatedUsers';

import SearchFiltersBar, { SearchFiltersValue } from './components/SearchFiltersBar';

const filters = ['All', 'English', 'Spanish', 'German', 'Nearby'];

const HomeScreen: React.FC = () => {
    const [filtersState, setFiltersState] = React.useState<SearchFiltersValue>({
        query: '',
        filter: 'All',
    });

    const nativeLanguage =
        filtersState.filter && filtersState.filter !== 'All' && filtersState.filter !== 'Nearby'
            ? filtersState.filter
            : undefined;

    const learningLanguage = filtersState.query.trim() || undefined;

    const { users, loading, loadingMore, hasMore, loadMore } = usePaginatedUsers({
        filters: {
            nativeLanguage,
            learningLanguage,
        },
        onlyFavorite: false,
        pageSize: 10,
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <GreetingCard username="John" avatarLetter="J" />

            <SearchFiltersBar filters={filters} value={filtersState} onChange={setFiltersState} />

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

export default HomeScreen;
