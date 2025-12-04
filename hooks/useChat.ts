import { useEffect, useState } from 'react';

import { fetchMessages } from '@/services/message/api/fetchMessages';
import { sendMessage as sendMessageApi } from '@/services/message/api/sendMessage';
import type { Message } from '@/services/message/type';
import { useAppSelector } from '@/store/hooks';
import { UsersScope } from '@/store/usersSlice';

const PAGE_SIZE = 20;
const SCOPES: UsersScope[] = ['home', 'favorites', 'chatList'];

export function useChat(chatId?: string) {
    const user = useAppSelector(state => {
        if (!chatId) return undefined;

        for (const scope of SCOPES) {
            const list = state.users.lists[scope];
            const found = list.items.find(u => u.chatId === chatId);
            if (found) return found;
        }

        return undefined;
    });

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (!chatId) return;

        const loadChat = async () => {
            setLoading(true);
            setPage(1);
            setHasMore(true);

            try {
                const msgs = await fetchMessages(chatId, {
                    page: 1,
                    limit: PAGE_SIZE,
                });

                const normalized = msgs.reverse();

                setMessages(normalized);
                if (msgs.length < PAGE_SIZE) setHasMore(false);
            } finally {
                setLoading(false);
            }
        };

        loadChat();
    }, [chatId]);

    const loadMore = async () => {
        if (!chatId || loading || loadingMore || !hasMore) return;

        setLoadingMore(true);
        const nextPage = page + 1;

        try {
            const msgs = await fetchMessages(chatId, {
                page: nextPage,
                limit: PAGE_SIZE,
            });

            const normalized = msgs.reverse();

            setMessages(prev => [...prev, ...normalized]);
            setPage(nextPage);

            if (msgs.length < PAGE_SIZE) setHasMore(false);
        } finally {
            setLoadingMore(false);
        }
    };

    const sendMessage = async (text: string) => {
        if (!chatId) return;

        const newMessage = await sendMessageApi(chatId, text);

        setMessages(prev => [newMessage, ...prev]);
    };

    return {
        user,
        messages,
        loading,
        loadingMore,
        hasMore,
        loadMore,
        sendMessage,
    };
}
