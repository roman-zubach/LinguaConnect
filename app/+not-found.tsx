import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import { useThemeColors } from '@/hooks/useThemeColors';

const NotFoundScreen: React.FC = () => {
    const colors = useThemeColors();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.code, { color: colors.text }]}>404</Text>

            <Text style={[styles.message, { color: colors.subtext }]}>Page not found</Text>

            <Link href="/(tabs)/home" asChild>
                <CustomButton title="Go Home" />
            </Link>
        </View>
    );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    code: {
        fontSize: 32,
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        marginBottom: 24,
    },
});
