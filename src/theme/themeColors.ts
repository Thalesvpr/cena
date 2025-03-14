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

  return {
    primary: argbToHex(primary.tone(isDark ? 80 : 40)),
    onPrimary: argbToHex(primary.tone(isDark ? 20 : 100)),
    primaryContainer: argbToHex(primary.tone(isDark ? 30 : 90)),
    onPrimaryContainer: argbToHex(primary.tone(isDark ? 90 : 10)),

    secondary: argbToHex(secondary.tone(isDark ? 80 : 40)),
    onSecondary: argbToHex(secondary.tone(isDark ? 20 : 100)),
    secondaryContainer: argbToHex(secondary.tone(isDark ? 30 : 90)),
    onSecondaryContainer: argbToHex(secondary.tone(isDark ? 90 : 10)),

    tertiary: argbToHex(tertiary.tone(isDark ? 80 : 40)),
    onTertiary: argbToHex(tertiary.tone(isDark ? 20 : 100)),
    tertiaryContainer: argbToHex(tertiary.tone(isDark ? 30 : 90)),
    onTertiaryContainer: argbToHex(tertiary.tone(isDark ? 90 : 10)),

    error: argbToHex(error.tone(isDark ? 80 : 40)),
    onError: argbToHex(error.tone(isDark ? 20 : 100)),
    errorContainer: argbToHex(error.tone(isDark ? 30 : 90)),
    onErrorContainer: argbToHex(error.tone(isDark ? 90 : 10)),

    surfaceDim: argbToHex(neutral.tone(isDark ? 87 : 6)),
    surface: argbToHex(neutral.tone(isDark ? 98 : 6)),
    surfaceBright: argbToHex(neutral.tone(isDark ? 98 : 24)),
    surfaceContainerLowest: argbToHex(neutral.tone(isDark ? 100 : 4)),
    surfaceContainerLow: argbToHex(neutral.tone(isDark ? 96 : 10)),
    surfaceContainer: argbToHex(neutral.tone(isDark ? 94 : 12)),
    surfaceContainerHigh: argbToHex(neutral.tone(isDark ? 92 : 17)),
    surfaceContainerHighest: argbToHex(neutral.tone(isDark ? 90 : 22)),

    onSurface: argbToHex(neutral.tone(isDark ? 90 : 10)),
    onSurfaceVariant: argbToHex(neutral.tone(isDark ? 80 : 30)),

    outline: argbToHex(neutral.tone(isDark ? 60 : 50)),
    outlineVariant: argbToHex(neutral.tone(isDark ? 30 : 80)),

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
export type BaseColors = "primary" | "secondary" | "tertiary" | "error";

// Tipos para cores de container
export type ContainerColors = `${BaseColors}Container`;

// Tipos para cores "on" (texto sobre as cores base)
export type OnColors = `on${Capitalize<BaseColors>}`;

// Tipos para cores "onContainer" (texto sobre os containers)
export type OnContainerColors = `on${Capitalize<BaseColors>}Container`;

// Tipos para cores de superfície
export type SurfaceColors = Pick<
  typeof Colors.light,
  | "surfaceDim"
  | "surface"
  | "surfaceBright"
  | "surfaceContainerLowest"
  | "surfaceContainerLow"
  | "surfaceContainer"
  | "surfaceContainerHigh"
  | "surfaceContainerHighest"
>;

// Tipos para cores de texto
export type TextColors = Pick<
  typeof Colors.light,
  "onSurface" | "onSurfaceVariant"
>;

// Tipos para cores de borda
export type OutlineColors = Pick<
  typeof Colors.light,
  "outline" | "outlineVariant"
>;

// Tipos para cores inversas
export type InverseColors = Pick<
  typeof Colors.light,
  "inverseSurface" | "inverseOnSurface" | "inversePrimary"
>;

// Tipos para cores de sombra
export type ShadowColors = Pick<typeof Colors.light, "scrim" | "shadow">;

// Função utilitária para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função principal para obter cores correspondentes
export function getForwardsColor(
  backwardsColor: BaseColors | ContainerColors | "surface"
): OnColors | "onSurface" | OnContainerColors {
  if (backwardsColor === "surface") {
    return "onSurface"; // Caso especial para "surface"
  }

  if (backwardsColor.endsWith("Container")) {
    return `on${capitalizeFirstLetter(
      backwardsColor.replace("Container", "")
    )}Container` as OnContainerColors;
  }

  return `on${capitalizeFirstLetter(backwardsColor)}` as OnColors;
}

// Implementação de getContainerColor usando lógica similar à getForwardsColor
export function getContainerColor(baseColor: BaseColors): ContainerColors {
  return `${baseColor}Container` as ContainerColors;
}

// Implementação de getOnColor usando getForwardsColor
export function getOnColor(baseColor: BaseColors): OnColors {
  return getForwardsColor(baseColor) as OnColors;
}

// Implementação de getOnContainerColor usando getForwardsColor e getContainerColor
export function getOnContainerColor(baseColor: BaseColors): OnContainerColors {
  // Primeiro obtém o container, depois obtém o "on" correspondente
  const containerColor = getContainerColor(baseColor);
  return getForwardsColor(containerColor) as OnContainerColors;
}
