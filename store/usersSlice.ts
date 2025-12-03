import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUsers, FetchUsersOptions } from '@/services/user/api/fetchUsers';
import type { UserItem } from '@/services/user/type';

export type UsersFilters = {
    nativeLanguage?: string;
    learningLanguage?: string;
};

export type UsersScope = 'home' | 'favorites' | 'chatList';

type PaginatedListState = {
    items: UserItem[];
    loading: boolean;
    loadingMore: boolean;
    page: number;
    pageSize: number;
    hasMore: boolean;
    error: string | null;
    filters: UsersFilters;
    onlyFavorite: boolean;
};

type UsersState = {
    lists: Record<UsersScope, PaginatedListState>;
};

const createInitialListState = (): PaginatedListState => ({
    items: [],
    loading: false,
    loadingMore: false,
    page: 1,
    pageSize: 10,
    hasMore: true,
    error: null,
    filters: {},
    onlyFavorite: false,
});

const initialState: UsersState = {
    lists: {
        home: createInitialListState(),
        favorites: createInitialListState(),
        chatList: createInitialListState(),
    },
};

type FetchUsersThunkArgs = {
    scope: UsersScope;
    page?: number;
    pageSize?: number;
    filters?: UsersFilters;
    onlyFavorite?: boolean;
};

export const fetchUsersThunk = createAsyncThunk(
    'users/fetchUsers',
    async (args: FetchUsersThunkArgs, { rejectWithValue }) => {
        const { scope, page = 1, pageSize = 10, filters, onlyFavorite } = args;

        try {
            const options: FetchUsersOptions = {
                page,
                limit: pageSize,
                onlyFavorite,
                nativeLanguage: filters?.nativeLanguage,
                learningLanguage: filters?.learningLanguage,
            };

            const data = await fetchUsers(options);
            const hasMore = data.length >= pageSize;

            return {
                scope,
                items: data,
                page,
                hasMore,
            };
        } catch {
            return rejectWithValue({ scope, message: 'Failed to load users' });
        }
    },
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setConfig(
            state,
            action: PayloadAction<{
                scope: UsersScope;
                filters?: UsersFilters;
                onlyFavorite?: boolean;
                pageSize?: number;
            }>,
        ) {
            const { scope, filters, onlyFavorite, pageSize } = action.payload;
            const list = state.lists[scope];

            if (filters) {
                list.filters = filters;
            }
            if (onlyFavorite !== undefined) {
                list.onlyFavorite = onlyFavorite;
            }
            if (pageSize !== undefined) {
                list.pageSize = pageSize;
            }
        },
        resetUsers(state, action: PayloadAction<{ scope: UsersScope }>) {
            const { scope } = action.payload;
            state.lists[scope] = {
                ...createInitialListState(),
                pageSize: state.lists[scope].pageSize,
            };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsersThunk.pending, (state, action) => {
                const { scope, page = 1 } = action.meta.arg;
                const list = state.lists[scope];

                if (page === 1) {
                    list.loading = true;
                    list.error = null;
                    list.items = [];
                    list.page = 1;
                    list.hasMore = true;
                } else {
                    list.loadingMore = true;
                }
            })
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                const { scope, items, page, hasMore } = action.payload;
                const list = state.lists[scope];

                if (page === 1) {
                    list.items = items;
                } else {
                    list.items = [...list.items, ...items];
                }

                list.page = page;
                list.hasMore = hasMore;
                list.loading = false;
                list.loadingMore = false;
            })
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                const { scope, message } = (action.payload as {
                    scope: UsersScope;
                    message: string;
                }) || { scope: 'home', message: 'Unknown error' };

                const list = state.lists[scope];
                list.loading = false;
                list.loadingMore = false;
                list.error = message;
            });
    },
});

export const { setConfig, resetUsers } = usersSlice.actions;
export default usersSlice.reducer;
