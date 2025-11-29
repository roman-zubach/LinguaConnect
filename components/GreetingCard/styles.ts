import { StyleSheet } from 'react-native';

import colors from '@/constants/colors';
import { spacing, radius } from '@/constants/layout';
import { fontSizes, fontWeights } from '@/constants/typography';

export const styles = StyleSheet.create({
    container: {
        padding: spacing.lg,
        marginBottom: spacing.lg,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: fontSizes.lg,
        fontWeight: fontWeights.bold,
        color: colors.text,
    },
    subtitle: {
        marginTop: 4,
        color: colors.subtext,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: colors.background,
        fontWeight: fontWeights.semibold,
    },
});
