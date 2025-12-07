import { AuthUser } from '@/services/auth/type';

export type LoginPayload = {
    email: string;
    password: string;
};

export async function signIn(payload: LoginPayload): Promise<AuthUser> {
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        id: 1,
        username: payload.email.split('@')[0],
        email: payload.email,
    };
}
