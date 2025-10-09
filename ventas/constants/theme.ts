/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    // Colores primarios
    primary500: '#ea2a33',
    
    // Colores neutros
    neutral100: '#f5f5f5',
    neutral200: '#e5e5e5',
    neutral400: '#a3a3a3',
    neutral500: '#737373',
    neutral800: '#181111',
    neutral900: '#171717',
    
    // Colores de estado
    success500: '#22c55e',
    danger500: '#ef4444',
    warning500: '#f97316',
    info500: '#3b82f6',
    
    // Aliases para compatibilidad
    text: '#171717',
    background: '#f5f5f5',
    tint: '#ea2a33',
    icon: '#737373',
    tabIconDefault: '#737373',
    tabIconSelected: '#ea2a33',
  },
  dark: {
    // Para modo oscuro (puedes ajustar según necesites)
    primary500: '#ea2a33',
    neutral100: '#171717',
    neutral200: '#181111',
    neutral400: '#737373',
    neutral500: '#a3a3a3',
    neutral800: '#e5e5e5',
    neutral900: '#f5f5f5',
    success500: '#22c55e',
    danger500: '#ef4444',
    warning500: '#f97316',
    info500: '#3b82f6',
    text: '#f5f5f5',
    background: '#171717',
    tint: '#ea2a33',
    icon: '#a3a3a3',
    tabIconDefault: '#a3a3a3',
    tabIconSelected: '#ea2a33',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'PublicSans-Regular',
    serif: 'PublicSans-Regular',
    rounded: 'PublicSans-Medium',
    mono: 'PublicSans-Medium',
  },
  android: {
    sans: 'PublicSans-Regular',
    serif: 'PublicSans-Regular',
    rounded: 'PublicSans-Medium',
    mono: 'PublicSans-Medium',
  },
  default: {
    sans: 'PublicSans-Regular',
    serif: 'PublicSans-Regular',
    rounded: 'PublicSans-Medium',
    mono: 'PublicSans-Medium',
  },
  web: {
    sans: 'PublicSans-Regular, system-ui, sans-serif',
    serif: 'PublicSans-Regular, Georgia, serif',
    rounded: 'PublicSans-Medium, sans-serif',
    mono: 'PublicSans-Medium, monospace',
  },
});
