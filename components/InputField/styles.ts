import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing } from '@/constants/layout';
import { fontSizes } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        marginVertical: spacing.xs,
    },
    input: {
        color: colors.text,
        fontSize: fontSizes.md,
    },
    placeholder: {
        color: colors.subtext,
    },
});
