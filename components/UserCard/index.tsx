import React, { useState, memo, useCallback } from 'react';

import { View, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native';

import CustomButton from '@/components/CustomButton';
import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

type Props = {
    name: string;
    flag?: string;
    subtitle: string;
    imageUrl: string;
    nativeLanguage: string;
    learningLanguage: string;
    chatId: string;
    online?: boolean;
    onChat?: (chatId: string) => void;
};

const UserCardComponent: React.FC<Props> = ({
    name,
    flag = '🇺🇸',
    subtitle,
    imageUrl,
    nativeLanguage,
    learningLanguage,
    chatId,
    online = true,
    onChat,
}) => {
    const colors = useThemeColors();
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpanded = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(prev => !prev);
    };

    const handleChat = useCallback(() => {
        onChat?.(chatId);
    }, [onChat, chatId]);

    return (
        <View style={[styles.card, { backgroundColor: colors.card }]}>
            <TouchableOpacity
                style={styles.left}
                activeOpacity={0.8}
                onPress={handleToggleExpanded}
            >
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
                        {name} <Text style={styles.flag}>{flag}</Text>
                    </Text>

                    <Text
                        style={[styles.subtitle, { color: colors.subtext }]}
                        numberOfLines={expanded ? 0 : 1}
                    >
                        {subtitle}
                    </Text>

                    {expanded && (
                        <Text style={[styles.extraInfo, { color: colors.subtext }]}>
                            {`Fluent: ${nativeLanguage} | Learning: ${learningLanguage}`}
                        </Text>
                    )}
                </View>
            </TouchableOpacity>

            <CustomButton title="Say Hi!" onPress={handleChat} style={styles.button} />
        </View>
    );
};

const UserCard = memo(
    UserCardComponent,
    (prevProps, nextProps) =>
        prevProps.name === nextProps.name &&
        prevProps.flag === nextProps.flag &&
        prevProps.subtitle === nextProps.subtitle &&
        prevProps.imageUrl === nextProps.imageUrl &&
        prevProps.online === nextProps.online &&
        prevProps.nativeLanguage === nextProps.nativeLanguage &&
        prevProps.learningLanguage === nextProps.learningLanguage &&
        prevProps.onChat === nextProps.onChat,
);

export default UserCard;
