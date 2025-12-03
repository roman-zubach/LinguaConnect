import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/layout';
import { fontSizes } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        marginVertical: spacing.xs,
    },
    input: {
        fontSize: fontSizes.md,
    },
});
