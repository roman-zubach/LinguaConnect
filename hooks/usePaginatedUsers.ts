import { useEffect, useState, useMemo } from 'react';

import { fetchUsers, FetchUsersOptions } from '@/services/user/api/fetchUsers';
import type { UserItem } from '@/services/user/type';

type UsePaginatedUsersArgs = {
    filters?: {
        nativeLanguage?: string;
        learningLanguage?: string;
    };
    onlyFavorite?: boolean;
    pageSize?: number;
};

export function usePaginatedUsers({
    filters,
    onlyFavorite = false,
    pageSize = 10,
}: UsePaginatedUsersArgs) {
    const [users, setUsers] = useState<UserItem[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const stableFilters = useMemo(
        () => ({
            nativeLanguage: filters?.nativeLanguage,
            learningLanguage: filters?.learningLanguage,
        }),
        [filters?.nativeLanguage, filters?.learningLanguage],
    );

    const buildOptions = (pageNum: number): FetchUsersOptions => {
        const options: FetchUsersOptions = {
            page: pageNum,
            limit: pageSize,
        };

        if (onlyFavorite) {
            options.onlyFavorite = true;
        }

        if (stableFilters.nativeLanguage) {
            options.nativeLanguage = stableFilters.nativeLanguage;
        }

        if (stableFilters.learningLanguage) {
            options.learningLanguage = stableFilters.learningLanguage;
        }

        return options;
    };

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setPage(1);
            setHasMore(true);

            try {
                const data = await fetchUsers(buildOptions(1));
                setUsers(data);
                if (data.length < pageSize) setHasMore(false);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [onlyFavorite, pageSize, stableFilters]);

    const loadMore = async () => {
        if (loadingMore || loading || !hasMore) return;

        setLoadingMore(true);
        const nextPage = page + 1;

        try {
            const data = await fetchUsers(buildOptions(nextPage));
            setUsers(prev => [...prev, ...data]);
            setPage(nextPage);

            if (data.length < pageSize) setHasMore(false);
        } finally {
            setLoadingMore(false);
        }
    };

    return {
        users,
        loading,
        loadingMore,
        hasMore,
        loadMore,
    };
}
