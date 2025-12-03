import { StyleSheet } from 'react-native';

import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    container: {
        flex: 1,
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerCard: {
        marginHorizontal: spacing.md,
        marginTop: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: radius.lg,
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
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },

    avatarInitial: {
        fontWeight: fontWeights.semibold,
        fontSize: fontSizes.md,
    },

    headerName: {
        fontSize: fontSizes.md,
        fontWeight: fontWeights.semibold,
    },

    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },

    statusText: {
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
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },

    roundButtonIcon: {
        fontSize: fontSizes.md,
    },

    textInputWrapper: {
        flex: 1,
        borderRadius: radius.md,
        paddingHorizontal: spacing.sm,
        paddingVertical: 6,
        marginRight: spacing.sm,
    },

    textInput: {
        fontSize: fontSizes.sm,
        maxHeight: 80,
    },

    iconButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.sm,
    },

    iconButtonIcon: {
        fontSize: fontSizes.md,
    },

    sendButtonWrapper: {
        borderRadius: radius.md,
        paddingHorizontal: spacing.lg,
        paddingVertical: 8,
    },

    sendButton: {
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.semibold,
        textAlign: 'center',
    },
});
