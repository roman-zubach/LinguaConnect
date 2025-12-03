import React from 'react';

import { View, Text, Image } from 'react-native';

import CustomButton from '@/components/CustomButton';
import { useThemeColors } from '@/hooks/useThemeColors';

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
}) => {
    const colors = useThemeColors();

    return (
        <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={styles.left}>
                <View style={styles.avatarWrapper}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />

                    <View
                        style={[
                            styles.dot,
                            {
                                borderColor: colors.card,
                                backgroundColor: online ? colors.accent : colors.danger,
                            },
                        ]}
                    />
                </View>

                <View style={styles.textBlock}>
                    <Text style={[styles.name, { color: colors.text }]}>
                        {name}
                        <Text style={styles.flag}>{flag}</Text>
                    </Text>

                    <Text style={[styles.subtitle, { color: colors.subtext }]} numberOfLines={1}>
                        {subtitle}
                    </Text>
                </View>
            </View>

            <CustomButton title="Say Hi!" onPress={onChat} style={styles.button} />
        </View>
    );
};

export default UserCard;
