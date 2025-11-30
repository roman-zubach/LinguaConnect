import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
    createdAt: number;
    isOwn?: boolean;
};

const ChatBubble: React.FC<Props> = ({ text, isOwn, createdAt }) => {
    const time = new Date(createdAt).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <View style={[styles.bubble, isOwn ? styles.own : styles.other]}>
            <Text style={[styles.text, isOwn && styles.textOwn]}>{text}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
};

export default ChatBubble;
