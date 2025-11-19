import { Platform } from 'react-native';

type ShadowLevel = 0 | 1 | 2 | 3;

export const getShadow = (level: ShadowLevel = 1) => {
    if (level === 0) return {};
    const ios = [
        { opacity: 0.1, radius: 3, y: 2 },
        { opacity: 0.12, radius: 6, y: 4 },
        { opacity: 0.14, radius: 12, y: 8 },
    ][level - 1];

    return Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOpacity: ios.opacity,
            shadowRadius: ios.radius,
            shadowOffset: { width: 0, height: ios.y },
        },
        android: { elevation: level * 2 },
        default: {},
    });
};
