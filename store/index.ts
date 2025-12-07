import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@/store/authSlice';
import usersReducer from '@/store/usersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
