import React from 'react';

import { View, Text } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

type Props = {
    text: string;
    createdAt: number;
    isOwn?: boolean;
};

const ChatBubble: React.FC<Props> = ({ text, isOwn, createdAt }) => {
    const colors = useThemeColors();

    const time = new Date(createdAt).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <View
            style={[
                styles.bubble,
                {
                    backgroundColor: isOwn ? colors.primary : colors.card,
                    alignSelf: isOwn ? 'flex-end' : 'flex-start',
                    borderWidth: isOwn ? 0 : 1,
                    borderColor: colors.border,
                },
            ]}
        >
            <Text style={[styles.text, { color: isOwn ? colors.text : colors.text }]}>{text}</Text>

            <Text style={[styles.time, { color: colors.subtext }]}>{time}</Text>
        </View>
    );
};

export default ChatBubble;
