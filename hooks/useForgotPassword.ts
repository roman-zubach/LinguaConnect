import { useState, useCallback } from 'react';

import { forgotPassword } from '@/services/auth/api/forgotPassword';

export function useForgotPassword() {
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const submit = useCallback(async () => {
        setError(null);
        setMessage(null);

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setError('Please enter your email.');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            setSubmitting(true);

            await forgotPassword({ email: trimmedEmail });

            setMessage('If this email exists, we have sent a reset link.');
        } finally {
            setSubmitting(false);
        }
    }, [email]);

    return {
        email,
        setEmail,
        submitting,
        message,
        error,
        submit,
    };
}
