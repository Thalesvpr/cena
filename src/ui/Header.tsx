"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { useThemeColors } from "@/hooks/useThemeColor";
import Link from "next/link";
import { Texts } from "@/widgets/Texts";
import { metadata } from "@/metadata";
import Image from "next/image";
import { MdMenu } from "react-icons/md"; // Importe o ícone MdMenu
import { Button } from "@/widgets/Button";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemedText } from "@/widgets/ThemedText";
import { Design } from "@/theme/themeConstants";

export const Header = () => {
  const { toggleTheme, isDark } = useTheme();

  const colors = useThemeColors();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{ backgroundColor: colors.surfaceContainer }}
      className="p-4 flex justify-between items-center"
    >
      {/* Logo e Nome da Marca */}
      <Link href="/" className="no-underline text-inherit">
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
          <Image
            src={metadata.brand.logourl}
            alt="Logo Cena Nacional"
            width={144} // Ajuste conforme necessário
            height={60} // Ajuste conforme necessário
            style={{
              objectFit: "contain",
              filter: isDark ? "invert(1)" : "none",
            }}
            priority
          />
          <div
            className=" w-40 h-1 md:h-10 md:w-1"
            style={{ backgroundColor: colors.onSurface }}
          ></div>
          <ThemedText
            style={{ maxWidth: "170px", textAlign: "center" }}
            fontWeight={Design.Base.FontWeights.light}
          >
            {metadata.brand.logotext}
          </ThemedText>
        </div>
      </Link>

      {/* Botão de Menu para Telas Pequenas */}
      <div className=" flex gap-4">
        <div className="md:hidden">
          <Button
            icon={"MdMenu"} // Ícone do menu
            raw // Propriedade raw para estilização personalizada
            onPress={toggleMenu} // Função para abrir/fechar o menu
          />
        </div>
        <div className="md:hidden">
          <Button
            icon={isDark ? "MdNightlight" : "MdSunny"}
            themeColor={isDark ? "tertiary" : "secondary"}
            onPress={toggleTheme}
          />
        </div>
      </div>

      {/* Navbar (visível em telas maiores) */}

      <div className=" items-center gap-4 hidden md:flex ">
        <Navbar />
        <div className="hidden md:block">
          <Button
            icon={isDark ? "MdNightlight" : "MdSunny"}
            themeColor={isDark ? "tertiary" : "secondary"}
            onPress={toggleTheme}
          />
        </div>
      </div>

      {/* Menu para Telas Pequenas (condicional) */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute z-50 top-24 right-4 shadow-lg rounded-lg p-4"
          style={{ backgroundColor: colors.surfaceContainer }}
        >
          <Navbar isMobile={true} />
        </div>
      )}
    </header>
  );
};
