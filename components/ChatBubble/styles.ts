import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    bubble: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderRadius: radius.lg,
        marginVertical: spacing.xs,
        maxWidth: '78%',
    },
    own: {
        backgroundColor: colors.primary,
        alignSelf: 'flex-end',
    },
    other: {
        backgroundColor: colors.card,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: colors.border,
    },
    text: {
        color: colors.text,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.regular,
        lineHeight: 20,
    },
    textOwn: {
        color: colors.text,
    },
});
