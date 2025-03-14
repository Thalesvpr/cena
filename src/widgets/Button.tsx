import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

import { IconName, getIcon } from "@/utils/iconUtils";
import { BaseColors, getForwardsColor } from "@/theme/themeColors";
import { Texts } from "./Texts";

export interface ButtonProps {
  title?: string;
  themeColor?: BaseColors;
  badgeThemeColor?: BaseColors;
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
  badgeThemeColor = "primary",
  iconPosition = "left",
  onPress,
  disabled = false,
  raw,
}) => {
  const backgroundColor = useThemeColor(`${themeColor}Container`);
  const textColor = useThemeColor(
    `${getForwardsColor(`${themeColor}Container`)}`
  );
  const borderColor = themeColor && useThemeColor("outlineVariant");

  const isIconOnly = !title && icon;
  const contentDirection =
    iconPosition === "left" ? "flex-row" : "flex-row-reverse";

  // Carregue o ícone dinamicamente
  const IconComponent = icon ? getIcon(icon) : null;

  return (
    <button
      className={`flex items-center justify-center rounded-full ${
        outline
          ? "border-2 bg-transparent"
          : raw
          ? "bg-transparent border-0"
          : ""
      } ${disabled ? "opacity-50" : ""}`}
      style={{
        backgroundColor: outline || raw ? "transparent" : backgroundColor,
        borderColor: outline ? borderColor : undefined,
      }}
      onClick={onPress}
      disabled={disabled}
    >
      <div className={`flex ${contentDirection} items-center gap-2.5`}>
        {icon && (
          <div className="relative w-6 h-6 flex items-center justify-center">
            {IconComponent && <IconComponent size={20} color={textColor} />}
          </div>
        )}
        {title && (
          <Texts.Button backwardsColor={`${themeColor}Container`}>
            {title}
          </Texts.Button>
        )}
      </div>
    </button>
  );
};
