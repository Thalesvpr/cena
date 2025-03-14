import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { FontSizes, FontWeights, LineHeights } from "@/theme/themeConstants";
import { ThemedText } from "@/widgets/ThemedText";

interface SectionProps {
  children?: React.ReactNode; // Conteúdo principal (opcional)
  title?: string; // Título opcional
  content?: React.ReactNode; // Conteúdo opcional
}

interface SectionComponent extends React.FC<SectionProps> {
  Title: React.FC<{ children: React.ReactNode }>;
  Content: React.FC<{ children: React.ReactNode }>;
}

const Section: SectionComponent = ({ children, title, content }) => {
  const surfaceColor = useThemeColor("surface");

  return (
    <section
      style={{
        backgroundColor: surfaceColor,
        padding: "20px",
        margin: "20px 0",
      }}
    >
      {/* Renderiza o título se ele for fornecido */}
      {title && <Section.Title>{title}</Section.Title>}

      {/* Renderiza o conteúdo se ele for fornecido */}
      {content && <Section.Content>{content}</Section.Content>}

      {/* Renderiza o conteúdo principal (children) */}
      {children}
    </section>
  );
};

// Subcomponente Title
Section.Title = ({ children }) => {
  const textColor = useThemeColor("onSurface");

  return (
    <ThemedText
      fontSize={FontSizes.xl}
      fontWeight={FontWeights.medium}
      color={textColor}
      style={{ marginBottom: "10px" }}
    >
      {children}
    </ThemedText>
  );
};

// Subcomponente Content
Section.Content = ({ children }) => {
  const textColor = useThemeColor("onSurface");

  return <div style={{ color: textColor }}>{children}</div>;
};

export default Section;
