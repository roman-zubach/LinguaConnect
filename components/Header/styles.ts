import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
        marginBottom: spacing.lg,
    },

    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    iconWrapper: {
        marginRight: spacing.xs,
    },

    title: {
        color: colors.text,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
        fontStyle: 'italic',
    },
});
