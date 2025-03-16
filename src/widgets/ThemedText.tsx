"use client";

import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors } from "@/theme/themeColors";
import { Size, Weight } from "@/types/utilities.types";

export type ThemedTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  themeColor?: BaseColors;
  fontSize?: Size;
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

export function ThemedText({
  style,
  themeColor = "onSurface",
  fontSize,
  fontWeight,
  lineHeight,
  nowrap,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(themeColor);

  // Verifica se o fontSize é válido
  const validatedFontSize =
    fontSize !== undefined && isValidFontSize(fontSize)
      ? typeof fontSize === "number"
        ? `${fontSize}px` // Converte número para px
        : fontSize // Mantém a string com unidades
      : undefined;

  return (
    <p
      style={{
        color,
        fontSize: validatedFontSize, // Aplica o fontSize validado
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
