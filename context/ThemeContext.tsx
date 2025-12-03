import React, { createContext, useContext, useEffect, useState } from 'react';

import { Appearance } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { storageKeys } from '@/constants/storageKeys';

export type AppTheme = 'light' | 'dark' | 'system';

type ThemeContextValue = {
    theme: AppTheme;
    resolvedTheme: 'light' | 'dark';
    toggleTheme: () => void;
    setTheme: (t: AppTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState<AppTheme>('system');
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(
        Appearance.getColorScheme() ?? 'light',
    );

    const setTheme = async (value: AppTheme) => {
        setThemeState(value);
        await AsyncStorage.setItem(storageKeys.appTheme, value);
    };

    const toggleTheme = async () => {
        const next = resolvedTheme === 'light' ? 'dark' : 'light';
        await setTheme(next as AppTheme);
    };

    useEffect(() => {
        AsyncStorage.getItem(storageKeys.appTheme).then(saved => {
            if (saved === 'light' || saved === 'dark' || saved === 'system') {
                setThemeState(saved);
            }
        });
    }, []);

    useEffect(() => {
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            if (colorScheme && theme === 'system') {
                setResolvedTheme(colorScheme);
            }
        });

        return () => listener.remove();
    }, [theme]);

    useEffect(() => {
        if (theme === 'light' || theme === 'dark') {
            setResolvedTheme(theme);
        }
        if (theme === 'system') {
            setResolvedTheme(Appearance.getColorScheme() ?? 'light');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useAppTheme must be used within ThemeProvider');
    return ctx;
};
