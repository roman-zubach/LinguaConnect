import { useEffect } from 'react';

import { useRouter } from 'expo-router';

import { useAppSelector } from '@/store/hooks';

export function useAuthGuard() {
    const router = useRouter();

    const user = useAppSelector(state => state.auth.user);
    const initialized = useAppSelector(state => state.auth.initialized);
    const isAuthenticated = !!user;

    useEffect(() => {
        if (!initialized) return;

        if (!isAuthenticated) {
            router.replace('/(auth)/login');
        }
    }, [initialized, isAuthenticated, router]);

    return {
        user,
        initialized,
        isAuthenticated,
    };
}
