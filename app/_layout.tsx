import React, { useEffect } from 'react';

import { Text } from 'react-native';

import {
    ThemeProvider as NavigationThemeProvider,
    DarkTheme,
    DefaultTheme,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { ThemeProvider as AppThemeProvider, useAppTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColors';
import { createStackScreenOptions } from '@/services/navigation/options';
import { store } from '@/store';
import { initAuthThunk } from '@/store/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const RootNavigation = () => {
    const { resolvedTheme } = useAppTheme();
    const colors = useThemeColors();

    const dispatch = useAppDispatch();
    const initialized = useAppSelector(state => state.auth.initialized);

    useEffect(() => {
        dispatch(initAuthThunk());
    }, [dispatch]);

    if (!initialized) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

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
                <Stack screenOptions={{ ...createStackScreenOptions(colors) }}>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen
                        name="chat/[chatId]"
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                            fullScreenGestureEnabled: true,
                        }}
                    />
                    <Stack.Screen name="+not-found" options={{ headerShown: false }} />
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
