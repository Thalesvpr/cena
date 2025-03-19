import React, { useState } from "react";
import { useThemeColor, useThemeColors } from "@/hooks/useThemeColor";
import { IconName, getIcon } from "@/utils/iconUtils";
import { BaseColors, getForwardsColor } from "@/theme/themeColors";
import { Texts } from "./Texts";
import { Design } from "@/theme/themeConstants";

export interface ButtonProps {
  title?: string;
  themeColor?: BaseColors | "surface";
  outline?: boolean;
  icon?: IconName;
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

  // Load icon dynamically
  const IconComponent = icon ? getIcon(icon) : null;

  // Create a stable button props object to avoid hydration mismatches
  const buttonProps = {
    className: `flex items-center justify-center rounded-full relative overflow-hidden ${
      outline ? "border-2 bg-transparent" : raw ? "bg-transparent border-0" : ""
    } ${disabled ? "opacity-50" : ""}`,
    style: {
      backgroundColor: outline || raw ? "transparent" : backgroundColor,
      borderColor: outline ? borderColor : undefined,
      height: Design.Semantic.Sizes.touchMinimal,
      paddingInline: isIconOnly ? 0 : Design.Base.PaddingMargin.md,
      width: isIconOnly ? Design.Semantic.Sizes.touchMinimal : "auto",
      cursor: "pointer",
    },
    onClick: onPress,
    disabled: disabled,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    // Add this to let React handle the hydration mismatch for this property
    suppressHydrationWarning: true,
  };

  return (
    <button {...buttonProps}>
      {/* Animated circle */}
      <div
        style={{
          position: "absolute",
          bottom: isHovered ? "-170%" : "-100px",
          left: "30%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "100px",
          backgroundColor: circleColor,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: isHovered ? 0.2 : 0,
          transition: "bottom 0.3s ease-out, opacity 0.3s ease-out",
        }}
      />

      {/* Button content */}
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
