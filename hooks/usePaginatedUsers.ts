import { useEffect, useMemo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchUsersThunk, resetUsers, setConfig, UsersScope } from '@/store/usersSlice';

type UsePaginatedUsersArgs = {
    scope: UsersScope;
    filters?: {
        nativeLanguage?: string;
        learningLanguage?: string;
    };
    onlyFavorite?: boolean;
    pageSize?: number;
};

export function usePaginatedUsers({
    scope,
    filters,
    onlyFavorite = false,
    pageSize = 10,
}: UsePaginatedUsersArgs) {
    const dispatch = useAppDispatch();

    const list = useAppSelector(state => state.users.lists[scope]);
    const { items, loading, loadingMore, hasMore, page } = list;

    const stableFilters = useMemo(
        () => ({
            nativeLanguage: filters?.nativeLanguage,
            learningLanguage: filters?.learningLanguage,
        }),
        [filters?.nativeLanguage, filters?.learningLanguage],
    );

    useEffect(() => {
        dispatch(
            setConfig({
                scope,
                filters: stableFilters,
                onlyFavorite,
                pageSize,
            }),
        );

        dispatch(resetUsers({ scope }));

        dispatch(
            fetchUsersThunk({
                scope,
                page: 1,
                pageSize,
                filters: stableFilters,
                onlyFavorite,
            }),
        );
    }, [dispatch, scope, onlyFavorite, pageSize, stableFilters]);

    const loadMore = useCallback(() => {
        if (loading || loadingMore || !hasMore) return;

        dispatch(
            fetchUsersThunk({
                scope,
                page: page + 1,
                pageSize,
                filters: stableFilters,
                onlyFavorite,
            }),
        );
    }, [
        dispatch,
        scope,
        loading,
        loadingMore,
        hasMore,
        page,
        pageSize,
        stableFilters,
        onlyFavorite,
    ]);

    return {
        users: items,
        loading,
        loadingMore,
        hasMore,
        loadMore,
    };
}
