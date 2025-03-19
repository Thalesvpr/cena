"use client";

import React, { ReactNode } from "react";
import { useThemeColor, useThemeColors } from "@/hooks/useThemeColor";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Design } from "@/theme/themeConstants";
import { Button } from "@/widgets/Button";
import { useRouter } from "next/navigation";

interface PageProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showBackButton?: boolean;
  customHeader?: ReactNode;
  customFooter?: ReactNode;
}

export const Page = ({
  children,
  showHeader = true,
  showFooter = true,
  showBackButton = false,
}: PageProps) => {
  // Obtém a cor de fundo do tema atual
  const colors = useThemeColors();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: colors.surface }} // Aplica a cor de fundo
    >
      {showHeader && <Header />}
      {showBackButton && (
        <div
          className=" w-20 flex justify-end"
          style={{
            marginTop: Design.Base.SpaceGaps.md,
            padding: Design.Base.PaddingMargin.sm,
            backgroundColor: colors.surfaceContainer,
            borderBottomRightRadius: Design.Semantic.BorderRadius.circle,
            borderTopRightRadius: Design.Semantic.BorderRadius.circle,
          }}
        >
          <Button
            icon="MdChevronLeft"
            themeColor="tertiary"
            onPress={handleBack}
          />
        </div>
      )}
      <main
        className="flex-grow"
        style={{
          paddingInline: Design.Layout.body.lateralPadding,
          paddingBlock: Design.Layout.body.lateralPadding,
          maxWidth: Design.Layout.body.maxWidth,
          marginInline: "auto",
        }}
      >
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};
