import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.card,
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
        borderColor: colors.card,
    },
    dotOnline: {
        backgroundColor: colors.accent,
    },
    dotOffline: {
        backgroundColor: colors.danger,
    },

    textBlock: {
        marginLeft: spacing.sm,
        flexShrink: 1,
    },

    name: {
        color: colors.text,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },

    flag: {
        fontSize: fontSizes.md,
    },

    subtitle: {
        color: colors.subtext,
        fontSize: fontSizes.sm,
        marginTop: 2,
    },

    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 18,
        minWidth: 90,
        alignSelf: 'center',
    },
});
