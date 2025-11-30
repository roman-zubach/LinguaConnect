import { apiPost } from '@/services/api';
import { Message } from '@/services/message/type';

export async function sendMessage(chatId: string, text: string): Promise<Message> {
    const payload = {
        chatId,
        text,
        isOwn: true,
        createdAt: Date.now(),
    };

    return await apiPost<Message, typeof payload>('/messages', payload);
}
