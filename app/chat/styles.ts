import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    headerCard: {
        marginHorizontal: spacing.md,
        marginTop: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: radius.lg,
        backgroundColor: colors.surface,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: spacing.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 22,
        color: '#fff',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },
    avatarInitial: {
        color: colors.background,
        fontWeight: fontWeights.semibold,
        fontSize: fontSizes.md,
    },
    headerName: {
        color: colors.text,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.accent,
        marginRight: 4,
    },
    statusText: {
        color: colors.subtext,
        fontSize: fontSizes.xs,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    headerStar: {
        fontSize: 18,
    },
    headerMore: {
        fontSize: 18,
        color: colors.subtext,
    },

    messagesList: {
        flex: 1,
        paddingHorizontal: spacing.md,
    },

    inputBarWrapper: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
        paddingTop: spacing.sm,
    },
    inputBar: {
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
    },
    roundButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.card,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },
    roundButtonIcon: {
        color: colors.text,
        fontSize: fontSizes.md,
    },
    textInputWrapper: {
        flex: 1,
        backgroundColor: colors.card,
        borderRadius: radius.md,
        paddingHorizontal: spacing.sm,
        paddingVertical: 6,
        marginRight: spacing.sm,
    },
    textInput: {
        color: colors.text,
        fontSize: fontSizes.sm,
        maxHeight: 80,
    },
    iconButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.card,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },
    iconButtonIcon: {
        fontSize: fontSizes.md,
    },
    sendButtonWrapper: {
        borderRadius: radius.md,
        overflow: 'hidden',
    },
    sendButton: {
        backgroundColor: colors.primary,
        color: colors.background,
        paddingHorizontal: spacing.lg,
        paddingVertical: 8,
        borderRadius: radius.md,
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.semibold,
        textAlign: 'center',
    },
});
