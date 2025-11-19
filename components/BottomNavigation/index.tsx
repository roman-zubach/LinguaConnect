import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type TabId = 'home' | 'chat' | 'favorites' | 'profile';

type Props = {
    active?: TabId;
    onPress?: (id: TabId) => void;
};

const items: { id: TabId; icon: string; label: string }[] = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'chat', icon: '💬', label: 'Chat' },
    { id: 'favorites', icon: '⭐', label: 'Favorites' },
    { id: 'profile', icon: '👤', label: 'Profile' },
];

const BottomNavigation: React.FC<Props> = ({ active = 'home', onPress }) => (
    <View style={styles.nav}>
        {items.map(item => {
            const isActive = active === item.id;

            return (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => onPress?.(item.id)}
                    activeOpacity={0.8}
                    style={styles.tab}
                >
                    <Text style={[styles.icon, isActive ? styles.iconActive : styles.iconInactive]}>
                        {item.icon}
                    </Text>
                    <Text
                        style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}
                    >
                        {item.label}
                    </Text>
                </TouchableOpacity>
            );
        })}
    </View>
);

export default BottomNavigation;
