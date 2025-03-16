"use client";

import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors } from "@/theme/themeColors";
import { Size, Weight } from "@/types/utilities.types";
import useMedia from "@/hooks/useMidia";

export type ThemedTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  themeColor?: BaseColors;
  fontSize?: Size;
  responsive?: boolean;
  fontWeight?: Weight;
  lineHeight?: number | string;
  nowrap?: boolean;
};

/**
 * Verifica se o valor de `fontSize` é um número ou uma string com unidades válidas.
 */
function isValidFontSize(fontSize: Size): boolean {
  if (typeof fontSize === "number") {
    return true; // É um número
  }

  // Verifica se é uma string com unidades válidas
  const validUnits = ["px", "rem", "em", "%", "vh", "vw"];
  const regex = new RegExp(`^\\d+(${validUnits.join("|")})$`);
  return regex.test(fontSize);
}

/**
 * Aplica a escala ao fontSize com base no dispositivo.
 */
function applyFontSizeScale(
  fontSize: Size,
  scaleFactor: number
): string | undefined {
  if (fontSize === undefined) return undefined;

  if (typeof fontSize === "number") {
    return `${fontSize / scaleFactor}px`; // Aplica a escala e converte para px
  }

  // Se for uma string, extrai o valor numérico e a unidade
  const numericValue = parseFloat(fontSize);
  const unit = fontSize.match(/[a-zA-Z%]+/)?.toString() || "px";

  return `${numericValue / scaleFactor}${unit}`; // Aplica a escala e mantém a unidade
}

export function ThemedText({
  style,
  themeColor = "onSurface",
  fontSize,
  fontWeight,
  lineHeight,
  responsive = true,
  nowrap,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(themeColor);
  const midia = useMedia();

  // Define os fatores de escala para diferentes dispositivos
  const scaleFactors = {
    desktop: 1, // Sem escala para desktop
    tablet: 1.2,
    mobile: 1.5,
    unknown: 1, // Padrao
  };

  // Obtém o fator de escala com base no dispositivo
  const scaleFactor = scaleFactors[midia] || 1;

  // Aplica a escala ao fontSize
  const scaledFontSize =
    fontSize !== undefined && isValidFontSize(fontSize)
      ? applyFontSizeScale(fontSize, scaleFactor)
      : undefined;

  return (
    <p
      style={{
        color,
        fontSize: responsive ? scaledFontSize : fontSize, // Aplica o fontSize escalado
        fontWeight,
        lineHeight:
          lineHeight !== undefined
            ? typeof lineHeight === "number"
              ? `${lineHeight}px` // Converte número para px
              : lineHeight // Mantém a string com unidades
            : undefined,
        whiteSpace: nowrap ? "nowrap" : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}
