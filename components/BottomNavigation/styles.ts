import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing, iconSize } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.surface,
        paddingVertical: spacing.xs,
        borderTopWidth: 1,
        borderColor: colors.border,
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
    iconActive: {
        color: colors.primary,
    },
    iconInactive: {
        color: colors.subtext,
    },
    label: {
        fontSize: fontSizes.xs,
        fontWeight: fontWeights.medium,
    },
    labelActive: {
        color: colors.primary,
    },
    labelInactive: {
        color: colors.subtext,
    },
});
