import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  BaseColors,
  ContainerColors,
  getForwardsColor,
} from "@/theme/themeColors";


export type Weight =   "100"
| "200"
| "300"
| "400"
| "500"
| "600"
| "700"
| "800"
| "900";

export type ThemedTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  backwardsColor?: BaseColors | ContainerColors | "surface";
  themeColor?: BaseColors | ContainerColors | "surface" | "outline";
  fontSize?: number;
  fontWeight?: Weight;
  lineHeight?: number;
  nowrap?: boolean;
};

export function ThemedText({
  style,
  themeColor,
  backwardsColor = "surface",
  fontSize,
  fontWeight,
  lineHeight,
  nowrap,
  ...rest
}: ThemedTextProps) {
  const forwordsThemeColor = useThemeColor(getForwardsColor(backwardsColor));
  const color = useThemeColor(themeColor ? themeColor : "error");

  const className = `text-${fontSize} font-${fontWeight} leading-${lineHeight} ${
    nowrap ? "whitespace-nowrap" : ""
  }`;

  return (
    <p
      className={className}
      style={{
        color: themeColor ? color : forwordsThemeColor,
        fontFamily: "Inter",
        ...style,
      }}
      {...rest}
    />
  );
}
