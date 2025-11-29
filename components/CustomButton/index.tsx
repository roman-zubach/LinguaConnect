import React from 'react';

import { TouchableOpacity, Text, ViewStyle, StyleProp } from 'react-native';

import colors from '@/constants/colors';

import { styles } from './styles';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'sm';

type Props = {
    title: string;
    onPress?: () => void;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    fullWidth?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};

const CustomButton: React.FC<Props> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    disabled = false,
    fullWidth = false,
    style,
    children,
}) => {
    const bgMap: Record<Variant, string> = {
        primary: colors.primary,
        secondary: colors.surface,
    };

    const isSecondary = variant === 'secondary';

    const sizeStyle = size === 'sm' ? styles.buttonSm : styles.buttonMd;
    const borderStyle = isSecondary ? styles.secondary : undefined;

    return (
        <TouchableOpacity
            accessibilityRole="button"
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
            style={[
                styles.button,
                sizeStyle,
                { backgroundColor: bgMap[variant] },
                borderStyle,
                fullWidth && styles.fullWidth,
                disabled && styles.disabled,
                style,
            ]}
        >
            {children ? children : <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
};

export default CustomButton;
