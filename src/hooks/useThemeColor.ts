import { useContext } from "react";
import { ThemeContext, useTheme } from "@/contexts/ThemeContext";
import { Colors, generateColors } from "@/theme/themeColors";

export const useThemeColor = (colorKey: keyof typeof Colors.light) => {
  const { isDark } = useTheme(); // Use the useTheme hook to safely access the context
  const colors = generateColors("#4c662b", isDark);

    return colors[colorKey];
};

export const useThemeColors = () => {
  const { isDark } = useTheme(); // Use the useTheme hook to safely access the context
  const colors = generateColors("#4c662b", isDark);
  return colors;
};
