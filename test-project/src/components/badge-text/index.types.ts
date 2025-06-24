export const textBadgeType = {
  dark: 'dark',
  light: 'light',
} as const;

export type TextBadgeType = keyof typeof textBadgeType;

export const textBadgeSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type TextBadgeSize = keyof typeof textBadgeSizes;

export const textBadgeVariants = {
  custom: 'custom',
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  confirm: 'confirm',
  warning: 'warning',
  error: 'error',
} as const;

export type TextBadgeVariant = keyof typeof textBadgeVariants;
