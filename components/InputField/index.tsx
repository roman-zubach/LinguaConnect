import React from 'react';

import { View, TextInput, TextInputProps } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

import { styles } from './styles';

type Props = TextInputProps;

const InputField: React.FC<Props> = ({
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    keyboardType = 'default',
    ...rest
}) => {
    const colors = useThemeColors();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
            ]}
        >
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.subtext}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                style={[
                    styles.input,
                    {
                        color: colors.text,
                    },
                ]}
                {...rest}
            />
        </View>
    );
};

export default InputField;
