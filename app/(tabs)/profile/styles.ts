import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { radius, spacing } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scroll: {
        flex: 1,
    },
    content: {},
    headerIcon: {
        fontSize: fontSizes.md,
        color: colors.primary,
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
        backgroundColor: colors.primary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.sm,
    },
    avatarInitial: {
        fontSize: 40,
        fontWeight: fontWeights.bold,
        color: colors.background,
    },
    name: {
        textAlign: 'center',
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
        color: colors.text,
        marginTop: spacing.xs,
    },
    status: {
        textAlign: 'center',
        fontSize: fontSizes.sm,
        color: colors.accent,
        marginTop: 2,
        marginBottom: spacing.lg,
    },

    infoBlock: {
        backgroundColor: colors.card,
        borderRadius: radius.md,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginBottom: spacing.sm,
    },
    infoLabel: {
        fontSize: fontSizes.xs,
        color: colors.subtext,
        marginBottom: 2,
    },
    infoValue: {
        fontSize: fontSizes.md,
        color: colors.text,
        fontWeight: fontWeights.semibold,
    },

    statsBlock: {
        backgroundColor: colors.card,
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
        color: colors.subtext,
    },
    statValue: {
        fontSize: fontSizes.sm,
        color: colors.text,
        fontWeight: fontWeights.semibold,
    },

    accountSection: {
        marginTop: spacing.sm,
    },
    accountTitle: {
        fontSize: fontSizes.xs,
        color: colors.subtext,
        marginBottom: spacing.xs,
    },
    accountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.card,
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
        color: colors.text,
        fontWeight: fontWeights.medium,
    },
    accountLabelDanger: {
        color: colors.danger,
    },
});
