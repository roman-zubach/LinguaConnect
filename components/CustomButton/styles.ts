import { StyleSheet } from 'react-native';

import { spacing, radius } from '@/constants/layout';
import { textStyles } from '@/constants/typography';

export const styles = StyleSheet.create({
    button: {
        borderRadius: radius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: spacing.xs,
        flexDirection: 'row',
        paddingHorizontal: spacing.lg,
    },

    buttonMd: {
        paddingVertical: spacing.sm,
    },

    buttonSm: {
        paddingVertical: spacing.xs,
    },

    fullWidth: {
        alignSelf: 'stretch',
    },

    disabled: {
        opacity: 0.6,
    },

    text: {
        ...textStyles.button,
    },
});
