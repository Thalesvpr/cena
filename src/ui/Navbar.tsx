"use client";

import React from "react";
import Link from "next/link";
import { useThemeColor, useThemeColors } from "@/hooks/useThemeColor";
import { Texts } from "@/widgets/Texts";
import { metadata } from "../metadata";
import { Button } from "@/widgets/Button";
import { IconName } from "@/utils/iconUtils";

interface NavbarProps {
  isMobile?: boolean; // Parâmetro para controlar o layout
}

export const Navbar = ({ isMobile = false }: NavbarProps) => {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        padding: isMobile ? "1rem" : "1rem 2rem", // Ajuste de padding para mobile
      }}
    >
      <div
        className={`max-w-7xl mx-auto ${
          isMobile ? "flex flex-col gap-4" : "flex justify-between items-center"
        }`}
      >
        {/* Links do Navbar */}
        <div
          className={
            isMobile ? "flex flex-col gap-4" : "flex gap-8 items-center"
          }
        >
          {metadata.navigation.header.map((route, index) => (
            <Link key={index} href={route.path}>
              <Button
                title={route.label}
                icon={route.icon as IconName}
                themeColor="secondary"
                raw
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
