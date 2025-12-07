import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import GreetingCard from '@/components/GreetingCard';
import UsersList from '@/components/UserList';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { usePaginatedUsers } from '@/hooks/usePaginatedUsers';
import { useThemeColors } from '@/hooks/useThemeColors';

import SearchFiltersBar, { SearchFiltersValue } from './components/SearchFiltersBar';

const filters = ['All', 'English', 'Spanish', 'German', 'Nearby'];

const HomeScreen: React.FC = () => {
    const colors = useThemeColors();

    const { user, initialized, isAuthenticated } = useAuthGuard();

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
        scope: 'home',
        filters: { nativeLanguage, learningLanguage },
        onlyFavorite: false,
        pageSize: 10,
    });

    if (!initialized || !isAuthenticated) return null;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <GreetingCard
                username={user?.username ?? 'User'}
                avatarLetter={(user?.username?.[0] ?? '?').toUpperCase()}
            />

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
