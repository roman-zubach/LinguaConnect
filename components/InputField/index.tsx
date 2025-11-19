import React from 'react';

import { View, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps;

const InputField: React.FC<Props> = ({
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    keyboardType = 'default',
    ...rest
}) => (
    <View style={[styles.container]}>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={styles.placeholder.color}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            style={styles.input}
            {...rest}
        />
    </View>
);

export default InputField;
