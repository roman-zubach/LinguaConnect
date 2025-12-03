import React from 'react';

import {
    ThemeProvider as NavigationThemeProvider,
    DarkTheme,
    DefaultTheme,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { ThemeProvider as AppThemeProvider, useAppTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColors';
import { store } from '@/store';

const RootNavigation = () => {
    const { resolvedTheme } = useAppTheme();
    const colors = useThemeColors();

    return (
        <>
            <StatusBar
                style={resolvedTheme === 'dark' ? 'light' : 'dark'}
                translucent={false}
                backgroundColor={colors.background}
            />

            <NavigationThemeProvider
                value={{
                    ...(resolvedTheme === 'dark' ? DarkTheme : DefaultTheme),
                    colors: {
                        ...(resolvedTheme === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
                        primary: colors.primary,
                        background: colors.background,
                        text: colors.text,
                        border: colors.border,
                        card: colors.card,
                        notification: colors.accent,
                    },
                }}
            >
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
                            headerShown: false,
                            presentation: 'modal',
                        }}
                    />
                </Stack>
            </NavigationThemeProvider>
        </>
    );
};

const RootLayout = () => (
    <Provider store={store}>
        <AppThemeProvider>
            <RootNavigation />
        </AppThemeProvider>
    </Provider>
);

export default RootLayout;
