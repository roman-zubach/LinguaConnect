import { apiGet } from '@/services/api';
import { UserItem } from '@/services/user/type';

export type FetchUsersOptions = {
    page?: number;
    limit?: number;
    onlyFavorite?: boolean;
    online?: boolean;
    learningLanguage?: string;
    nativeLanguage?: string;
};

export async function fetchUsers(options?: FetchUsersOptions): Promise<UserItem[]> {
    const params: Record<string, unknown> = {};

    params.page = options?.page ?? 1;
    params.limit = options?.limit ?? 5;

    if (options?.onlyFavorite) params.isFavorite = true;
    if (options?.online !== undefined) params.online = options.online;
    if (options?.learningLanguage) params.learningLangue = options.learningLanguage;
    if (options?.nativeLanguage) params.nativeLangue = options.nativeLanguage;

    return await apiGet<UserItem[], FetchUsersOptions>('/users', params);
}
