import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
    isOwn?: boolean;
};

const ChatBubble: React.FC<Props> = ({ text, isOwn = false }) => (
    <View style={[styles.bubble, isOwn ? styles.own : styles.other]}>
        <Text style={[styles.text, isOwn && styles.textOwn]}>{text}</Text>
    </View>
);

export default ChatBubble;
