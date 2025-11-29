import React from 'react';

import { View, Text } from 'react-native';

import { Link } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import colors from '@/constants/colors';

const NotFoundScreen: React.FC = () => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
            padding: 24,
        }}
    >
        <Text style={{ fontSize: 32, color: colors.text, marginBottom: 8 }}>404</Text>
        <Text style={{ fontSize: 16, color: colors.subtext, marginBottom: 24 }}>
            Page not found
        </Text>

        <Link href="/(tabs)/home" asChild>
            <CustomButton title="Go Home" />
        </Link>
    </View>
);

export default NotFoundScreen;
