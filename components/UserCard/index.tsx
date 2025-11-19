import React from 'react';

import { View, Text, Image } from 'react-native';

import CustomButton from '@/components/CustomButton';

import { styles } from './styles';

type Props = {
    name: string;
    flag?: string;
    subtitle: string;
    imageUrl: string;
    online?: boolean;
    onChat?: () => void;
};

const UserCard: React.FC<Props> = ({
    name,
    flag = '🇺🇸',
    subtitle,
    imageUrl,
    online = true,
    onChat,
}) => (
    <View style={styles.card}>
        {/* Ліва частина: аватар + текст */}
        <View style={styles.left}>
            <View style={styles.avatarWrapper}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={[styles.dot, online ? styles.dotOnline : styles.dotOffline]} />
            </View>

            <View style={styles.textBlock}>
                <Text style={styles.name}>
                    {name} <Text style={styles.flag}>{flag}</Text>
                </Text>
                <Text style={styles.subtitle} numberOfLines={1}>
                    {subtitle}
                </Text>
            </View>
        </View>

        <CustomButton title="Say Hi!" onPress={onChat} style={styles.button} />
    </View>
);

export default UserCard;
