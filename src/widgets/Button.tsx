import React, { useState } from "react";
import { useThemeColor, useThemeColors } from "@/hooks/useThemeColor";
import { IconName, getIcon } from "@/utils/iconUtils";
import { BaseColors, getForwardsColor } from "@/theme/themeColors";
import { Texts } from "./Texts";
import { PaddingMargin, Sizes } from "@/theme/themeConstants";

export interface ButtonProps {
  title?: string;
  themeColor?: BaseColors | "surface";
  outline?: boolean;
  icon?: IconName; // Use a tipagem IconName
  iconPosition?: "left" | "right";
  onPress?: () => void;
  disabled?: boolean;
  raw?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  outline = false,
  icon,
  themeColor = "primary",
  iconPosition = "left",
  onPress,
  disabled = false,
  raw,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = useThemeColors();
  const circleColor = useThemeColor(
    outline || raw
      ? (themeColor as BaseColors)
      : getForwardsColor(`${themeColor}Container` as BaseColors)
  );
  const backgroundColor = useThemeColor(`${themeColor}Container` as BaseColors);
  const iconColor = useThemeColor(
    outline || raw
      ? (`${themeColor}Container` as BaseColors)
      : getForwardsColor(`${themeColor}Container` as BaseColors)
  );
  const borderColor = themeColor && useThemeColor("outlineVariant");

  const isIconOnly = !title && icon;
  const contentDirection =
    iconPosition === "left" ? "flex-row" : "flex-row-reverse";

  // Carregue o ícone dinamicamente
  const IconComponent = icon ? getIcon(icon) : null;

  return (
    <button
      className={`flex items-center justify-center rounded-full relative overflow-hidden ${
        outline
          ? "border-2 bg-transparent"
          : raw
          ? "bg-transparent border-0"
          : ""
      } ${disabled ? "opacity-50" : ""}`}
      style={{
        backgroundColor: outline || raw ? "transparent" : backgroundColor,
        borderColor: outline ? borderColor : undefined,
        height: Sizes.touchMinimal,
        paddingInline: isIconOnly ? 0 : PaddingMargin.md,
        width: isIconOnly ? Sizes.touchMinimal : "auto",
        cursor: "pointer",
      }}
      onClick={onPress}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bolinha animada */}
      <div
        style={{
          position: "absolute",
          bottom: isHovered ? "-170%" : "-100px", // Sobe ao entrar no hover
          left: "30%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "100px",
          backgroundColor: circleColor, // Cor do texto
          borderRadius: "50%",
          pointerEvents: "none", // Não interfere com cliques
          opacity: isHovered ? 0.2 : 0, // Opacidade controlada pelo hover
          transition: "bottom 0.3s ease-out, opacity 0.3s ease-out", // Transição suave
        }}
      />

      {/* Conteúdo do botão */}
      <div className={`flex ${contentDirection} items-center gap-2.5`}>
        {icon && (
          <div className="relative w-6 h-6 flex items-center justify-center">
            {IconComponent && <IconComponent size={20} color={iconColor} />}
          </div>
        )}
        {title && (
          <Texts.Button
          
            themeColor={
              outline || raw
                ? (`${themeColor}Container` as BaseColors)
                : getForwardsColor(`${themeColor}Container` as BaseColors)
            }
          >
            {title}
          </Texts.Button>
        )}
      </div>
    </button>
  );
};
