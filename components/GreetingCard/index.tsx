import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    username: string;
    avatarLetter: string;
};

const GreetingCard: React.FC<Props> = ({ username, avatarLetter }) => (
    <View style={styles.container}>
        <View style={styles.headerRow}>
            <View>
                <Text style={styles.title}>👋 Hi, {username}!</Text>
                <Text style={styles.subtitle}>Ready to practice today?</Text>
            </View>

            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{avatarLetter}</Text>
            </View>
        </View>
    </View>
);

export default GreetingCard;
