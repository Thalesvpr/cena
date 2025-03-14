import React, { useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import { Texts } from "./Texts";

interface InputFieldProps {
  label: string;
  placeholder: string;
  helperText?: string;
  maxLength: number;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  helperText,
  maxLength,
  value,
  onChangeText,
  keyboardType = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const characterCount = value.length;
  const textColor = useThemeColor("onSurface");
  const outlineVariantColor = useThemeColor("outlineVariant");
  const backgroundColor = useThemeColor("surfaceContainer");
  const focusedBackgroundColor = useThemeColor("secondaryContainer");
  const focusedTextColor = useThemeColor("onSecondaryContainer");

  const hexToRgb = (hex: string) => {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const focusedTextColorRgb = hexToRgb(focusedTextColor);
  const textColorRgb = hexToRgb(textColor);

  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      <Texts.Label className={`text-[${textColor}] mb-2`}>{label}</Texts.Label>

      {/* Input */}
      <input
        className={`w-full h-12 px-4 rounded-full border-2 ${
          isFocused
            ? `bg-[${focusedBackgroundColor}] text-[${focusedTextColor}] placeholder-[rgba(${focusedTextColorRgb},0.5)]`
            : `bg-[${backgroundColor}] text-[${textColor}] placeholder-[rgba(${textColorRgb},0.5)]`
        }`}
        placeholder={placeholder}
        style={{ borderColor: "transparent" }} // Aplica a cor da borda
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        maxLength={maxLength}
        type={keyboardType === "numeric" ? "number" : "text"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Helper Text */}
      {helperText && (
        <ThemedText className={`text-xs text-[${outlineVariantColor}] mt-1`}>
          {helperText}
        </ThemedText>
      )}

      {/* Character Counter */}
      <ThemedText
        className={`text-xs text-[${outlineVariantColor}] text-right`}
      >
        {characterCount}/{maxLength}
      </ThemedText>
    </div>
  );
};
