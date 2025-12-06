import { StyleSheet } from 'react-native';

import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: radius.lg,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        marginVertical: spacing.sm,
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: spacing.sm,
    },

    avatarWrapper: {
        position: 'relative',
    },

    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },

    dot: {
        position: 'absolute',
        right: 3,
        bottom: 3,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 2,
    },

    textBlock: {
        marginLeft: spacing.sm,
        flexShrink: 1,
    },

    name: {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },

    flag: {
        fontSize: fontSizes.md,
    },

    subtitle: {
        fontSize: fontSizes.sm,
        marginTop: 2,
    },

    extraInfo: {
        fontSize: fontSizes.xs,
        marginTop: 4,
        fontWeight: fontWeights.regular,
    },

    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 18,
        minWidth: 90,
        alignSelf: 'center',
    },
});
