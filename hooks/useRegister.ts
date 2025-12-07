import { useState, useCallback } from 'react';

import { useRouter } from 'expo-router';

import { registerThunk } from '@/store/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export function useRegister() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const loading = useAppSelector(state => state.auth.loading);
    const authError = useAppSelector(state => state.auth.error);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [localError, setLocalError] = useState<string | null>(null);

    const error = localError ?? authError ?? null;

    const submit = useCallback(async () => {
        setLocalError(null);

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedConfirm = confirm.trim();

        if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirm) {
            setLocalError('Please fill in all fields.');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(trimmedEmail)) {
            setLocalError('Please enter a valid email address.');
            return;
        }

        if (trimmedPassword.length < 6) {
            setLocalError('Password must be at least 6 characters.');
            return;
        }

        if (trimmedPassword !== trimmedConfirm) {
            setLocalError('Passwords do not match.');
            return;
        }

        await dispatch(
            registerThunk({
                username: trimmedName,
                email: trimmedEmail,
                password: trimmedPassword,
            }),
        ).unwrap();

        router.replace('/(tabs)/home');
    }, [name, email, password, confirm, dispatch, router]);

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirm,
        setConfirm,
        submit,
        loading,
        error,
    };
}
