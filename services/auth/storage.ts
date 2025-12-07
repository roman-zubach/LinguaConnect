import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthUser } from '@/services/auth/type';

const AUTH_KEY = 'auth_user';

export async function saveAuth(user: AuthUser): Promise<void> {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export async function loadAuth(): Promise<AuthUser | null> {
    const raw = await AsyncStorage.getItem(AUTH_KEY);
    if (!raw) return null;

    try {
        return JSON.parse(raw) as AuthUser;
    } catch {
        return null;
    }
}

export async function clearAuth(): Promise<void> {
    await AsyncStorage.removeItem(AUTH_KEY);
}
