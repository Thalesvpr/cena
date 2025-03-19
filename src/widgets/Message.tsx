"use client";

import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors, getForwardsColor } from "@/theme/themeColors";
import { ThemedText, ThemedTextProps } from "./ThemedText";

interface MessageProps {
  text: string;
  position?: "left" | "right" | "center";
  themeColor?: BaseColors; // Cor de fundo dinâmica
  textProps?: ThemedTextProps; // Props para o ThemedText
}

export const Message: React.FC<MessageProps> = ({
  text,
  position = "left",
  themeColor = "primary", // Cor de fundo padrão
  textProps,
}) => {
  const backgroundColor = useThemeColor(`${themeColor}Container` as BaseColors);
  // Obtém a cor de fundo dinâmica

  return (
    <div
      className={`relative p-2 px-4 ${
        position === "center"
          ? "rounded-2xl"
          : position === "left"
          ? "rounded-tl-2xl rounded-r-2xl"
          : "rounded-tr-2xl rounded-l-2xl"
      }  m-4`}
      style={{ backgroundColor: backgroundColor }} // Aplica a cor de fundo dinâmica
    >
      {/* Triângulo (perninha) */}
      {/* 
      {!(position == "center") && (
        <div
          className={`absolute bottom-0 ${
            position === "left" ? "-left-3" : "-right-3"
          } w-0 h-0 border-l-12 border-r-12 border-b-12 border-l-transparent border-r-transparent`}
          style={{ borderBottomColor: backgroundColor }} // Aplica a cor do triângulo
        ></div>
      )} */}

      {/* Texto com ThemedText */}
      <ThemedText
        themeColor={getForwardsColor(`${themeColor}Container` as BaseColors)}
        {...textProps}
      >
        {text}
        {/* {backgroundColor} */}
      </ThemedText>
    </div>
  );
};
