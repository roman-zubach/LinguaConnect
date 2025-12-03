import { StyleSheet } from 'react-native';

import { spacing, iconSize } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: spacing.xs,
        borderTopWidth: 1,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icon: {
        fontSize: iconSize.lg,
        marginBottom: 2,
    },
    label: {
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.medium,
    },
});
