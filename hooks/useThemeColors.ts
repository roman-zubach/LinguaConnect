import { darkColors, lightColors } from '@/constants/colors';
import { useAppTheme } from '@/context/ThemeContext';

export const useThemeColors = () => {
    const { resolvedTheme } = useAppTheme();

    return resolvedTheme === 'dark' ? darkColors : lightColors;
};
