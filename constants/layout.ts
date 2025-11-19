export const spacing = {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
} as const;

export const radius = {
    sm: 8,
    md: 12,
    lg: 16,
    pill: 999,
} as const;

export const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
} as const;

export const input = {
    height: 48,
    paddingH: 16,
    radius: radius.md,
} as const;

export const container = {
    paddingH: spacing.md,
    maxWidth: 480,
} as const;

export const hitSlop = { top: 8, right: 8, bottom: 8, left: 8 } as const;
