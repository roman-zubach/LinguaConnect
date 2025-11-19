export const fontFamilies = {
    regular: 'System',
    medium: 'System',
    bold: 'System',
} as const;

export const fontWeights = {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
} as const;

export const fontSizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
} as const;

export const lineHeights = {
    xs: 16,
    sm: 20,
    md: 22,
    lg: 26,
    xl: 30,
    xxl: 34,
} as const;

export const textStyles = {
    titleXL: {
        fontFamily: fontFamilies.bold,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.xl,
    },
    titleLG: {
        fontFamily: fontFamilies.bold,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.lg,
        lineHeight: lineHeights.lg,
    },
    subtitle: {
        fontFamily: fontFamilies.medium,
        fontWeight: fontWeights.medium,
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.sm,
    },
    body: {
        fontFamily: fontFamilies.regular,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.md,
        lineHeight: lineHeights.md,
    },
    caption: {
        fontFamily: fontFamilies.regular,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.sm,
    },
    button: {
        fontFamily: fontFamilies.medium,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.md,
        lineHeight: lineHeights.md,
        textAlign: 'center',
    },
} as const;
