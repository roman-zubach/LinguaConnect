import React from 'react';

import { DefaultTheme, type Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import colors from '@/constants/colors';

const navigationTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.background,
        text: colors.text,
        border: colors.border,
        notification: colors.accent,
    },
};

const RootLayout: React.FC = () => (
    <ThemeProvider value={navigationTheme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />

        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen
                name="chat/[chatId]"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="+not-found"
                options={{
                    presentation: 'modal',
                    headerShown: false,
                }}
            />
        </Stack>
    </ThemeProvider>
);

export default RootLayout;
