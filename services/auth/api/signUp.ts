import { apiPost } from '@/services/api';
import { AuthUser } from '@/services/auth/type';

export type CreateUserPayload = {
    username: string;
    email: string;
    password: string;
};

export const signUp = async (data: CreateUserPayload): Promise<AuthUser> =>
    await apiPost<AuthUser, CreateUserPayload>('/users', data);
