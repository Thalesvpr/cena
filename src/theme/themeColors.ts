import {
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";

// Função para converter ARGB em HEX
function argbToHex(argb: number): string {
  const red = (argb >> 16) & 0xff;
  const green = (argb >> 8) & 0xff;
  const blue = argb & 0xff;
  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

// Função para gerar cores dinamicamente
export function generateColors(sourceColorHex: string, isDark: boolean) {
  const sourceColorArgb = argbFromHex(sourceColorHex);
  const theme = themeFromSourceColor(sourceColorArgb);
  const { primary, secondary, tertiary, neutral, error } = theme.palettes;

  const containerBoolean = isDark ? 50 : 90;
  const onContainerBoolean = isDark ? 100 : 10;

  return {
    primary: argbToHex(primary.tone(isDark ? 80 : 40)),
    onPrimary: argbToHex(primary.tone(isDark ? 20 : 100)),
    primaryContainer: argbToHex(primary.tone(containerBoolean)),
    onPrimaryContainer: argbToHex(primary.tone(onContainerBoolean)),

    secondary: argbToHex(secondary.tone(isDark ? 80 : 40)),
    onSecondary: argbToHex(secondary.tone(isDark ? 20 : 100)),
    secondaryContainer: argbToHex(secondary.tone(containerBoolean)),
    onSecondaryContainer: argbToHex(secondary.tone(onContainerBoolean)),

    tertiary: argbToHex(tertiary.tone(isDark ? 80 : 40)),
    onTertiary: argbToHex(tertiary.tone(isDark ? 20 : 100)),
    tertiaryContainer: argbToHex(tertiary.tone(containerBoolean)),
    onTertiaryContainer: argbToHex(tertiary.tone(onContainerBoolean)),

    error: argbToHex(error.tone(isDark ? 80 : 40)),
    onError: argbToHex(error.tone(isDark ? 20 : 100)),
    errorContainer: argbToHex(error.tone(containerBoolean)),
    onErrorContainer: argbToHex(error.tone(onContainerBoolean)),

    surfaceDim: argbToHex(neutral.tone(isDark ? 87 : 6)),
    surface: argbToHex(neutral.tone(isDark ? 98 : 6)),
    surfaceBright: argbToHex(neutral.tone(isDark ? 98 : 24)),
    surfaceContainerLowest: argbToHex(neutral.tone(isDark ? 100 : 4)),
    surfaceContainerLow: argbToHex(neutral.tone(isDark ? 96 : 10)),
    surfaceContainer: argbToHex(neutral.tone(isDark ? 94 : 12)),
    surfaceContainerHigh: argbToHex(neutral.tone(isDark ? 92 : 17)),
    surfaceContainerHighest: argbToHex(neutral.tone(isDark ? 90 : 22)),

    onSurface: argbToHex(neutral.tone(isDark ? 10 : 90)),
    onSurfaceVariant: argbToHex(neutral.tone(isDark ? 45 : 55)),

    outline: argbToHex(neutral.tone(isDark ? 60 : 40)),
    outlineVariant: argbToHex(neutral.tone(isDark ? 70 : 30)),

    inverseSurface: argbToHex(neutral.tone(isDark ? 90 : 20)),
    inverseOnSurface: argbToHex(neutral.tone(isDark ? 20 : 95)),
    inversePrimary: argbToHex(primary.tone(isDark ? 40 : 80)),

    scrim: argbToHex(neutral.tone(isDark ? 0 : 0)),
    shadow: argbToHex(neutral.tone(isDark ? 0 : 0)),
  };
}

// Cores para o tema claro
export const lightColors = generateColors("#4c662b", false);

// Cores para o tema escuro
export const darkColors = generateColors("#4c662b", true);

// Exporta as cores
export const Colors = {
  light: lightColors,
  dark: darkColors,
};

// Tipos para cores base
export type BaseColors = keyof typeof Colors.light; //"primary" | "secondary" | "tertiary" | "error";

// Função utilitária para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função principal para obter cores correspondentes
export function getForwardsColor(backwardsColor: BaseColors): BaseColors {
  if (
    backwardsColor === "surface" ||
    backwardsColor.includes("surfaceContainer")
  ) {
    return "onSurface"; // Caso especial para "surface"
  }

  if (backwardsColor.endsWith("Container")) {
    return `on${capitalizeFirstLetter(
      backwardsColor.replace("Container", "")
    )}Container` as BaseColors;
  }

  return `on${capitalizeFirstLetter(backwardsColor)}` as BaseColors;
}
