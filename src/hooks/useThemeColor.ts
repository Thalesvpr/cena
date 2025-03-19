import { useTheme } from "@/contexts/ThemeContext";
import { Colors, generateColors } from "@/theme/themeColors";
const colorBase = "#FEA529";
export const useThemeColor = (colorKey: keyof typeof Colors.light) => {
  const { isDark } = useTheme(); // Use the useTheme hook to safely access the context
  const colors = generateColors(colorBase, isDark);
  return colors[colorKey];
};

export const useThemeColors = () => {
  const { isDark } = useTheme(); // Use the useTheme hook to safely access the context
  const colors = generateColors(colorBase, isDark);
  return colors;
};
