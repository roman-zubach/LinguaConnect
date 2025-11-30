import { apiGet } from '@/services/api';
import { Message } from '@/services/message/type';

export type FetchMessagesOptions = {
    page?: number;
    limit?: number;
};

export async function fetchMessages(
    chatId: string,
    options?: FetchMessagesOptions,
): Promise<Message[]> {
    const params: Record<string, unknown> = { chatId };

    params.page = options?.page ?? 1;
    params.limit = options?.limit ?? 10;

    return apiGet<Message[], typeof params>('/messages', params);
}
