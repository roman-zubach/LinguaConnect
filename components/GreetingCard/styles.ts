import { StyleSheet } from 'react-native';

import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        padding: spacing.lg,
        marginBottom: spacing.lg,
        borderRadius: radius.lg,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: spacing.md,
    },
    title: {
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
    },
    subtitle: {
        marginTop: 4,
        fontSize: fontSizes.md,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontWeight: fontWeights.semibold,
        fontSize: fontSizes.md,
    },
});
