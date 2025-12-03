import { StyleSheet } from 'react-native';

import { radius, spacing } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    content: {},
    headerIcon: {
        fontSize: fontSizes.md,
    },

    card: {
        borderRadius: radius.lg,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.lg,
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.sm,
    },
    avatarInitial: {
        fontSize: 40,
        fontWeight: fontWeights.bold,
    },
    name: {
        textAlign: 'center',
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
        marginTop: spacing.xs,
    },
    status: {
        textAlign: 'center',
        fontSize: fontSizes.sm,
        marginTop: 2,
        marginBottom: spacing.lg,
    },

    infoBlock: {
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginBottom: spacing.sm,
    },
    infoLabel: {
        fontSize: fontSizes.xs,
        marginBottom: 2,
    },
    infoValue: {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },

    statsBlock: {
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginTop: spacing.sm,
        marginBottom: spacing.lg,
    },
    statItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    statLabel: {
        fontSize: fontSizes.xs,
    },
    statValue: {
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.semibold,
    },

    accountSection: {
        marginTop: spacing.sm,
    },
    accountTitle: {
        fontSize: fontSizes.xs,
        marginBottom: spacing.xs,
    },
    accountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginTop: spacing.xs,
    },
    accountIcon: {
        fontSize: fontSizes.md,
        marginRight: spacing.sm,
    },
    accountLabel: {
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.medium,
    },
});
