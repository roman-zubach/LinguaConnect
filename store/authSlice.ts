import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LoginPayload, signIn } from '@/services/auth/api/signIn';
import { signUp, CreateUserPayload } from '@/services/auth/api/signUp';
import { clearAuth, loadAuth, saveAuth } from '@/services/auth/storage';
import { AuthUser } from '@/services/auth/type';

type AuthState = {
    user: AuthUser | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    initialized: boolean;
};

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    initialized: false,
};

export const initAuthThunk = createAsyncThunk<AuthUser | null>(
    'auth/init',
    async () => await loadAuth(),
);

export const loginThunk = createAsyncThunk('auth/login', async (data: LoginPayload) => {
    const user = await signIn(data);

    await saveAuth(user);

    return user;
});

export const registerThunk = createAsyncThunk('auth/register', async (data: CreateUserPayload) => {
    const user = await signUp(data);

    await saveAuth(user);

    return user;
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
    await clearAuth();
    dispatch(logout());
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(initAuthThunk.pending, state => {
                state.initialized = false;
            })
            .addCase(initAuthThunk.fulfilled, (state, action) => {
                state.initialized = true;
                state.user = action.payload;
                state.isAuthenticated = !!action.payload;
            })
            .addCase(initAuthThunk.rejected, state => {
                state.initialized = true;
            })
            .addCase(loginThunk.pending, state => {
                state.loading = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginThunk.rejected, state => {
                state.loading = false;
                state.error = 'Login failed';
            })

            .addCase(registerThunk.pending, state => {
                state.loading = true;
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(registerThunk.rejected, state => {
                state.loading = false;
                state.error = 'Register failed';
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
