import { StyleSheet } from 'react-native';

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
    text: {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.regular,
        lineHeight: 20,
    },
    time: {
        fontSize: 10,
        marginTop: 4,
        alignSelf: 'flex-end',
    },
});
