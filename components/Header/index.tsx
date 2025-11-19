import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    title: string;
    icon?: React.ReactNode;
};

const Header: React.FC<Props> = ({ title, icon }) => (
    <View style={styles.container}>
        <View style={styles.leftGroup}>
            {icon && <View style={styles.iconWrapper}>{icon}</View>}

            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
        </View>
    </View>
);

export default Header;
