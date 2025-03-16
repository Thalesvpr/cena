"use client";

import React, { ReactNode } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  customHeader?: ReactNode;
  customFooter?: ReactNode;
}

export const Page = ({
  children,
  showHeader = true,
  showFooter = true,
}: PageProps) => {
  // Obtém a cor de fundo do tema atual
  const backgroundColor = useThemeColor("surface");

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor }} // Aplica a cor de fundo
    >
      {showHeader && <Header />}
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};
