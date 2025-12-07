import { useState, useCallback } from 'react';

import { useRouter } from 'expo-router';

import { loginThunk } from '@/store/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export function useLogin() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const loading = useAppSelector(state => state.auth.loading);
    const authError = useAppSelector(state => state.auth.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localError, setLocalError] = useState<string | null>(null);

    const error = localError ?? authError ?? null;

    const submit = useCallback(async () => {
        setLocalError(null);

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            setLocalError('Please enter email and password.');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(trimmedEmail)) {
            setLocalError('Please enter a valid email address.');
            return;
        }

        await dispatch(
            loginThunk({
                email: trimmedEmail,
                password: trimmedPassword,
            }),
        ).unwrap();

        router.replace('/(tabs)/home');
    }, [email, password, dispatch, router]);

    return {
        email,
        setEmail,
        password,
        setPassword,
        submit,
        loading,
        error,
    };
}
