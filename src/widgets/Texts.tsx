import { Design } from "@/theme/themeConstants";
import { ThemedText, type ThemedTextProps } from "./ThemedText"; // Importe o ThemedText e seus tipos

// Objeto Texts com Composition Pattern
export const Texts = {
  Headline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.lg}
      fontWeight={Design.Base.FontWeights.medium}
    />
  ),
  Subheadline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.md}
      fontWeight={Design.Base.FontWeights.medium}
      lineHeight={Design.Base.LineHeights.md}
    />
  ),
  SupportingText: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.sm}
      fontWeight={Design.Base.FontWeights.normal}
      lineHeight={Design.Base.LineHeights.sm}
    />
  ),
  Caption: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.xs}
      fontWeight={Design.Base.FontWeights.medium}
      lineHeight={Design.Base.LineHeights.xs}
    />
  ),
  Button: (props: ThemedTextProps) => (
    <ThemedText
      responsive={false}
      {...props}
      fontSize={Design.Base.FontSizes.sm}
      fontWeight={Design.Base.FontWeights.normal}
    />
  ),
  Label: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.sm}
      fontWeight={Design.Base.FontWeights.normal}
      lineHeight={Design.Base.LineHeights.sm}
    />
  ),
};

// Objeto ReadingTexts com Composition Pattern
export const ReadingTexts = {
  Title: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.xl}
      fontWeight={Design.Base.FontWeights.normal}
      lineHeight={Design.Base.LineHeights.xl}
    />
  ),
  Subtitle: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.md} // 20
      fontWeight={Design.Base.FontWeights.light}
      lineHeight={Design.Base.LineHeights.md}
    />
  ),
  Description: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Base.FontSizes.sm}
      fontWeight={Design.Base.FontWeights.normal}
      lineHeight={Design.Base.LineHeights.sm}
    />
  ),
  Paragraph: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={Design.Semantic.FontSizes.reading}
      fontWeight={Design.Base.FontWeights.normal}
      lineHeight={Design.Base.LineHeights.md}
    />
  ),
};
