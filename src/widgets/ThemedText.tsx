"use client";

import React, { useMemo } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors } from "@/theme/themeColors";
import useMedia from "@/hooks/useMidia";
import styles from "@/styles/ThemedText.module.css";
import { Design } from "@/theme/themeConstants";

export type ThemedTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  themeColor?: BaseColors;
  fontSize?: Size;
  responsive?: boolean;
  fontWeight?: Weight;
  lineHeight?: number | string;
  nowrap?: boolean;
  highlightFirstLetter?: boolean;
  firstLetterColor?: BaseColors;
  firstLetterSize?: number | string;
  firstLetterWeight?: number | string;
  firstLetterlineHeight?: number | string;
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
  highlightFirstLetter = false,
  firstLetterColor = "tertiary",
  firstLetterSize = Design.Semantic.FontSizes.firstLetter,
  firstLetterWeight = Design.Semantic.FontSizes.firstLetter,
  firstLetterlineHeight = Design.Semantic.FontSizes.firstLetter,

  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(themeColor);
  const firstLetterThemeColor = useThemeColor(firstLetterColor);
  const midia = useMedia();

  // Memorize os fatores de escala
  const scaleFactors = useMemo(
    () => ({
      desktop: 1, // Sem escala para desktop
      tablet: 1.2,
      mobile: 1.2,
      unknown: 1, // Padrao
    }),
    []
  );

  // Memorize o fator de escala baseado na mídia
  const scaleFactor = useMemo(
    () => scaleFactors[midia] || 1,
    [scaleFactors, midia]
  );

  // Memorize o cálculo do fontSize escalado
  const scaledFontSize = useMemo(() => {
    if (fontSize === undefined || !isValidFontSize(fontSize)) return undefined;
    return applyFontSizeScale(fontSize, scaleFactor);
  }, [fontSize, scaleFactor]);

  // Memorize a combinação de classNames
  const combinedClassName = useMemo(
    () =>
      `${className || ""} ${
        highlightFirstLetter ? styles.highlightFirstLetter : ""
      }`.trim(),
    [className, highlightFirstLetter]
  );

  // Memorize as variáveis CSS para estilização da primeira letra
  const cssVariables = useMemo(() => {
    if (!highlightFirstLetter) return {};

    return {
      "--first-letter-color": firstLetterThemeColor,
      "--first-letter-size":
        typeof firstLetterSize === "number"
          ? `${firstLetterSize}px`
          : firstLetterSize,
      "--first-letter-weight":
        typeof firstLetterWeight === "number"
          ? `${firstLetterWeight}px`
          : firstLetterWeight,
      "--first-letter-line":
        typeof firstLetterlineHeight === "number"
          ? `${firstLetterlineHeight}px`
          : firstLetterlineHeight,
      "--first-letter-gap": `${Design.Base.PaddingMargin.md}px`,
    };
  }, [highlightFirstLetter, firstLetterThemeColor, firstLetterSize]);

  // Memorize o objeto de estilo completo
  const completeStyle = useMemo(
    () => ({
      color,
      fontSize: responsive ? scaledFontSize : fontSize,
      fontWeight,
      lineHeight:
        lineHeight !== undefined
          ? typeof lineHeight === "number"
            ? `${lineHeight}px`
            : lineHeight
          : undefined,
      whiteSpace: nowrap ? "nowrap" : undefined,
      ...cssVariables,
      ...style,
    }),
    [
      color,
      responsive,
      scaledFontSize,
      fontSize,
      fontWeight,
      lineHeight,
      nowrap,
      cssVariables,
      style,
    ]
  );

  return <p className={combinedClassName} style={completeStyle} {...rest} />;
}
